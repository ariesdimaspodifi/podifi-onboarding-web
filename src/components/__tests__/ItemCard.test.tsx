import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemCard from '../ItemCard';

describe('ItemCard Component', () => {
  const mockOnClick = jest.fn();
  
  const defaultProps = {
    menuItemCode: "item123",
    itemName: "Big Mac",
    itemPrice: "9.99",
    itemImage: "/itemcarditemimage@2x.png",
    onItemCardContainerClick: mockOnClick
  };

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('renders ItemCard with correct content', () => {
    render(<ItemCard {...defaultProps} />);
    
    expect(screen.getByText('Big Mac')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', '/itemcarditemimage@2x.png');
  });

  test('handles click event correctly', () => {
    render(<ItemCard {...defaultProps} />);
    
    const card = screen.getByRole('img').parentElement?.parentElement;
    fireEvent.click(card!);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith('item123');
  });

  test('renders different menu items correctly', () => {
    const items = [
      { menuItemCode: 'item1', itemName: 'Quarter Pounder', itemPrice: '12.99', itemImage: '/image1.png' },
      { menuItemCode: 'item2', itemName: 'Spicy McCrispy', itemPrice: '10.99', itemImage: '/image2.png' }
    ];

    items.forEach(item => {
      const { unmount } = render(<ItemCard {...item} onItemCardContainerClick={mockOnClick} />);
      
      expect(screen.getByText(item.itemName)).toBeInTheDocument();
      expect(screen.getByText(`$${item.itemPrice}`)).toBeInTheDocument();
      expect(screen.getByRole('img')).toHaveAttribute('src', item.itemImage);
      
      unmount();
    });
  });

  test('renders with default values when optional props are missing', () => {
    const { menuItemCode, onItemCardContainerClick, ...minimalProps } = defaultProps;
    render(<ItemCard {...minimalProps} />);
    
    expect(screen.getByText('Bigs Mac')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', '/itemcarditemimage@2x.png');
  });
}); 