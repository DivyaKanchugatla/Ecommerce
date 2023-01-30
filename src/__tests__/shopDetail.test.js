import { render,screen,cleanup } from '@testing-library/react';
import PageHeader from '../components/ShopDetails/PageHeader/PageHeader';
import Description from '../components/ShopDetails/Description/Description';

afterEach(() => {
    cleanup();
})
test('testing PageHeader Component', () => {
    render(<PageHeader />);
    const headerElement =screen.getByTestId('shopDetail')
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('Shop Detail');
    expect(headerElement).toHaveTextContent('Home')
  });
  test('testing Description Component', () => {
    render(<Description />);
    const tabs =screen.getByTestId('tabs')
    expect(tabs).toBeInTheDocument();
    expect(tabs).toHaveTextContent('Description');
    expect(tabs).toHaveTextContent('Information')
    expect(tabs).toHaveTextContent('Reviews')
    expect(tabs).toHaveTextContent('Product Description')
  });
  
  