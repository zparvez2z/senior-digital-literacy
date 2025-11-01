import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LessonListItem } from './LessonListItem';
import { render } from '../test/test-utils';
import { useNavigate } from 'react-router-dom';

// Mock react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('LessonListItem', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
  });

  const completedLesson = {
    id: 1,
    title: 'Getting Started',
    description: 'Introduction to the topic',
    duration: '15 min',
    completed: true,
    locked: false,
  };

  const uncompletedLesson = {
    id: 2,
    title: 'Next Steps',
    description: 'Continue your learning',
    duration: '20 min',
    completed: false,
    locked: false,
  };

  const lockedLesson = {
    id: 3,
    title: 'Advanced Topics',
    description: 'For advanced learners',
    duration: '30 min',
    completed: false,
    locked: true,
  };

  it('renders lesson information correctly', () => {
    render(
      <LessonListItem
        lesson={completedLesson}
        moduleId={1}
        lessonNumber={1}
      />
    );

    expect(screen.getByText('Getting Started')).toBeInTheDocument();
    expect(screen.getByText('Introduction to the topic')).toBeInTheDocument();
    expect(screen.getByText('15 min')).toBeInTheDocument();
  });

  it('displays lesson number badge', () => {
    render(
      <LessonListItem
        lesson={completedLesson}
        moduleId={1}
        lessonNumber={5}
      />
    );

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('shows "Completed" status for completed lessons', () => {
    render(
      <LessonListItem
        lesson={completedLesson}
        moduleId={1}
        lessonNumber={1}
      />
    );

    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByLabelText('Lesson completed')).toBeInTheDocument();
  });

  it('shows "Start" status for uncompleted unlocked lessons', () => {
    render(
      <LessonListItem
        lesson={uncompletedLesson}
        moduleId={1}
        lessonNumber={2}
      />
    );

    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  it('shows "Locked" status for locked lessons', () => {
    render(
      <LessonListItem
        lesson={lockedLesson}
        moduleId={1}
        lessonNumber={3}
      />
    );

    expect(screen.getByText('Locked')).toBeInTheDocument();
  });

  it('navigates to lesson page when clicked (unlocked lesson)', async () => {
    const user = userEvent.setup();
    
    render(
      <LessonListItem
        lesson={uncompletedLesson}
        moduleId={1}
        lessonNumber={2}
      />
    );

    const lessonCard = screen.getByRole('button', { name: /Lesson 2: Next Steps/ });
    await user.click(lessonCard);

    expect(mockNavigate).toHaveBeenCalledWith('/modules/1/lessons/2');
  });

  it('does not navigate when locked lesson is clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <LessonListItem
        lesson={lockedLesson}
        moduleId={1}
        lessonNumber={3}
      />
    );

    const lessonCard = screen.getByLabelText(/Lesson 3: Advanced Topics/);
    await user.click(lessonCard);

    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('navigates on Enter key press (unlocked lesson)', async () => {
    const user = userEvent.setup();
    
    render(
      <LessonListItem
        lesson={uncompletedLesson}
        moduleId={1}
        lessonNumber={2}
      />
    );

    const lessonCard = screen.getByRole('button', { name: /Lesson 2: Next Steps/ });
    lessonCard.focus();
    await user.keyboard('{Enter}');

    expect(mockNavigate).toHaveBeenCalledWith('/modules/1/lessons/2');
  });

  it('navigates on Space key press (unlocked lesson)', async () => {
    const user = userEvent.setup();
    
    render(
      <LessonListItem
        lesson={uncompletedLesson}
        moduleId={1}
        lessonNumber={2}
      />
    );

    const lessonCard = screen.getByRole('button', { name: /Lesson 2: Next Steps/ });
    lessonCard.focus();
    await user.keyboard(' ');

    expect(mockNavigate).toHaveBeenCalledWith('/modules/1/lessons/2');
  });

  it('has correct ARIA attributes for unlocked lesson', () => {
    render(
      <LessonListItem
        lesson={uncompletedLesson}
        moduleId={1}
        lessonNumber={2}
      />
    );

    const lessonCard = screen.getByRole('button', { name: /Lesson 2: Next Steps/ });
    expect(lessonCard).toHaveAttribute('tabIndex', '0');
    expect(lessonCard).not.toHaveAttribute('aria-disabled', 'true');
  });

  it('has correct ARIA attributes for locked lesson', () => {
    render(
      <LessonListItem
        lesson={lockedLesson}
        moduleId={1}
        lessonNumber={3}
      />
    );

    const lessonCard = screen.getByLabelText(/Lesson 3: Advanced Topics/);
    expect(lessonCard).toHaveAttribute('tabIndex', '-1');
    expect(lessonCard).toHaveAttribute('aria-disabled', 'true');
  });

  it('displays progress bar only for completed lessons', () => {
    const { rerender } = render(
      <LessonListItem
        lesson={completedLesson}
        moduleId={1}
        lessonNumber={1}
      />
    );

    expect(screen.getByLabelText('Lesson completed')).toBeInTheDocument();

    rerender(
      <LessonListItem
        lesson={uncompletedLesson}
        moduleId={1}
        lessonNumber={2}
      />
    );

    expect(screen.queryByLabelText('Lesson completed')).not.toBeInTheDocument();
  });

  it('has reduced opacity for locked lessons', () => {
    const { container } = render(
      <LessonListItem
        lesson={lockedLesson}
        moduleId={1}
        lessonNumber={3}
      />
    );

    const card = container.querySelector('[role="button"]');
    expect(card).toHaveStyle({ opacity: 0.6 });
  });

  it('has not-allowed cursor for locked lessons', () => {
    const { container } = render(
      <LessonListItem
        lesson={lockedLesson}
        moduleId={1}
        lessonNumber={3}
      />
    );

    const card = container.querySelector('[role="button"]');
    expect(card).toHaveStyle({ cursor: 'not-allowed' });
  });

  it('has pointer cursor for unlocked lessons', () => {
    const { container } = render(
      <LessonListItem
        lesson={uncompletedLesson}
        moduleId={1}
        lessonNumber={2}
      />
    );

    const card = container.querySelector('[role="button"]');
    expect(card).toHaveStyle({ cursor: 'pointer' });
  });
});
