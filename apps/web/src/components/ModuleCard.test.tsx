import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModuleCard } from '../components/ModuleCard';
import { render } from '../test/test-utils';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('ModuleCard', () => {
  const mockModule = {
    id: 1,
    title: 'Email Basics',
    description: 'Learn to send, receive, and organize emails safely',
    difficulty: 'Beginner',
    estimatedTime: '2 hours',
    progress: 45,
    icon: '📧',
    lessons: 8,
    color: '#0052A3',
  };

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders module information correctly', () => {
    render(<ModuleCard module={mockModule} />);

    expect(screen.getByText('Email Basics')).toBeInTheDocument();
    expect(screen.getByText('Learn to send, receive, and organize emails safely')).toBeInTheDocument();
    expect(screen.getByText('Beginner')).toBeInTheDocument();
    expect(screen.getByText('8 lessons')).toBeInTheDocument();
    expect(screen.getByText('2 hours')).toBeInTheDocument();
    expect(screen.getByText('45%')).toBeInTheDocument();
  });

  it('displays the correct status badge for in-progress module', () => {
    render(<ModuleCard module={mockModule} />);
    expect(screen.getByText('In Progress')).toBeInTheDocument();
  });

  it('displays "Not Started" badge for 0% progress', () => {
    const notStartedModule = { ...mockModule, progress: 0 };
    render(<ModuleCard module={notStartedModule} />);
    expect(screen.getByText('Not Started')).toBeInTheDocument();
  });

  it('displays "Completed" badge for 100% progress', () => {
    const completedModule = { ...mockModule, progress: 100 };
    render(<ModuleCard module={completedModule} />);
    expect(screen.getByText('✓ Completed')).toBeInTheDocument();
  });

  it('navigates to module detail page on click', async () => {
    const user = userEvent.setup();
    render(<ModuleCard module={mockModule} />);

    const card = screen.getByRole('button', { name: /Email Basics module/i });
    await user.click(card);

    expect(mockNavigate).toHaveBeenCalledWith('/modules/1');
  });

  it('navigates on Enter key press', async () => {
    const user = userEvent.setup();
    render(<ModuleCard module={mockModule} />);

    const card = screen.getByRole('button', { name: /Email Basics module/i });
    card.focus();
    await user.keyboard('{Enter}');

    expect(mockNavigate).toHaveBeenCalledWith('/modules/1');
  });

  it('navigates on Space key press', async () => {
    const user = userEvent.setup();
    render(<ModuleCard module={mockModule} />);

    const card = screen.getByRole('button', { name: /Email Basics module/i });
    card.focus();
    await user.keyboard(' ');

    expect(mockNavigate).toHaveBeenCalledWith('/modules/1');
  });

  it('has proper ARIA attributes', () => {
    render(<ModuleCard module={mockModule} />);

    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('aria-label', expect.stringContaining('Email Basics module'));
    expect(card).toHaveAttribute('aria-label', expect.stringContaining('Beginner difficulty'));
    expect(card).toHaveAttribute('aria-label', expect.stringContaining('45% complete'));
  });

  it('is keyboard focusable', () => {
    render(<ModuleCard module={mockModule} />);

    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabIndex', '0');
  });

  it('shows progress bar with correct value', () => {
    render(<ModuleCard module={mockModule} />);

    const progressBar = screen.getByRole('progressbar', { name: /Module progress: 45%/i });
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute('aria-valuenow', '45');
  });

  it('displays icon with proper accessibility label', () => {
    render(<ModuleCard module={mockModule} />);

    const icon = screen.getByLabelText('Email Basics icon');
    expect(icon).toHaveTextContent('📧');
  });

  it('applies different colors for difficulty levels', () => {
    const { rerender } = render(<ModuleCard module={mockModule} />);
    
    // Beginner should have success color
    expect(screen.getByText('Beginner')).toBeInTheDocument();

    // Rerender with Intermediate difficulty
    const intermediateModule = { ...mockModule, difficulty: 'Intermediate' };
    rerender(<ModuleCard module={intermediateModule} />);
    expect(screen.getByText('Intermediate')).toBeInTheDocument();
  });
});
