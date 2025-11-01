import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModulesPage } from '../pages/ModulesPage';
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

describe('ModulesPage', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders page title and description', () => {
    render(<ModulesPage />);

    expect(screen.getByRole('heading', { name: /Learning Modules/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Choose a topic to begin your learning journey/i)).toBeInTheDocument();
  });

  it('renders all 6 module cards', () => {
    render(<ModulesPage />);

    expect(screen.getByText('Email Basics')).toBeInTheDocument();
    expect(screen.getByText('Video Calls')).toBeInTheDocument();
    expect(screen.getByText('Online Banking')).toBeInTheDocument();
    expect(screen.getByText('Social Media')).toBeInTheDocument();
    expect(screen.getByText('Online Shopping')).toBeInTheDocument();
    expect(screen.getByText('Health Services')).toBeInTheDocument();
  });

  it('displays help section with AI assistant info', () => {
    render(<ModulesPage />);

    expect(screen.getByRole('heading', { name: /Need Help Choosing?/i })).toBeInTheDocument();
    expect(screen.getByText(/Our AI assistant can recommend/i)).toBeInTheDocument();
  });

  it('renders cards with correct difficulty levels', () => {
    render(<ModulesPage />);

    // Should have multiple Beginner badges
    const beginnerBadges = screen.getAllByText('Beginner');
    expect(beginnerBadges.length).toBeGreaterThan(0);

    // Should have multiple Intermediate badges
    const intermediateBadges = screen.getAllByText('Intermediate');
    expect(intermediateBadges.length).toBeGreaterThan(0);
  });

  it('displays module progress correctly', () => {
    render(<ModulesPage />);

    // Email Basics: 45%
    expect(screen.getByText('45%')).toBeInTheDocument();
    
    // Video Calls: 20%
    expect(screen.getByText('20%')).toBeInTheDocument();
    
    // Social Media: 60%
    expect(screen.getByText('60%')).toBeInTheDocument();
  });

  it('shows lesson counts for each module', () => {
    render(<ModulesPage />);

    expect(screen.getAllByText('8 lessons').length).toBeGreaterThan(0);
    expect(screen.getAllByText('6 lessons').length).toBeGreaterThan(0);
    expect(screen.getAllByText('10 lessons').length).toBeGreaterThan(0);
    expect(screen.getAllByText('7 lessons').length).toBeGreaterThan(0);
  });

  it('navigates to module detail when card is clicked', async () => {
    const user = userEvent.setup();
    render(<ModulesPage />);

    const emailCard = screen.getByRole('button', { name: /Email Basics module/i });
    await user.click(emailCard);

    expect(mockNavigate).toHaveBeenCalledWith('/modules/1');
  });

  it('has proper heading hierarchy', () => {
    render(<ModulesPage />);

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toHaveTextContent('Learning Modules');

    const h2s = screen.getAllByRole('heading', { level: 2 });
    expect(h2s.length).toBeGreaterThan(6); // Module cards + "Need Help Choosing?"
  });

  it('displays icons for each module', () => {
    render(<ModulesPage />);

    expect(screen.getByLabelText('Email Basics icon')).toHaveTextContent('📧');
    expect(screen.getByLabelText('Video Calls icon')).toHaveTextContent('📹');
    expect(screen.getByLabelText('Online Banking icon')).toHaveTextContent('🏦');
    expect(screen.getByLabelText('Social Media icon')).toHaveTextContent('🌐');
    expect(screen.getByLabelText('Online Shopping icon')).toHaveTextContent('🛒');
    expect(screen.getByLabelText('Health Services icon')).toHaveTextContent('🏥');
  });

  it('is keyboard navigable', async () => {
    const user = userEvent.setup();
    render(<ModulesPage />);

    // Tab through the cards
    await user.tab();
    const firstCard = screen.getByRole('button', { name: /Email Basics module/i });
    expect(firstCard).toHaveFocus();

    // Press Enter to navigate
    await user.keyboard('{Enter}');
    expect(mockNavigate).toHaveBeenCalledWith('/modules/1');
  });

  it('displays estimated time for each module', () => {
    render(<ModulesPage />);

    expect(screen.getAllByText('2 hours').length).toBeGreaterThan(0);
    expect(screen.getAllByText('1.5 hours').length).toBeGreaterThan(0);
    expect(screen.getAllByText('3 hours').length).toBeGreaterThan(0);
  });

  it('shows status badges based on progress', () => {
    render(<ModulesPage />);

    // Modules with 0% should show "Not Started"
    expect(screen.getAllByText('Not Started').length).toBeGreaterThan(0);

    // Modules with progress between 0-100% should show "In Progress"
    expect(screen.getAllByText('In Progress').length).toBeGreaterThan(0);
  });
});
