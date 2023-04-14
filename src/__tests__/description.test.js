import {render,screen,fireEvent} from '@testing-library/react';
import Description from '../components/ShopDetails/Description/Description';

describe("Description component", () => {
    test("renders Description component without crashing", () => {
        render(<Description />);
      });

      test('renders the Description tab content', () => {
        render(<Description />);
        const descriptionHeading = screen.getByTestId('des-heading');
        const descriptionParagraph1 = screen.getByTestId("des-para1");
        const descriptionParagraph2 = screen.getByTestId("des-para2");
        expect(descriptionHeading).toBeInTheDocument();
        expect(descriptionParagraph1).toBeInTheDocument();
        expect(descriptionParagraph2).toBeInTheDocument();
      });

      test('renders the Information tab content', () => {
        render(<Description />);
        const informationHeading = screen.getByTestId('info-heading');
        const informationParagraph = screen.getByTestId("info-para");
        const listContent = screen.getByTestId("list-element")
        expect(informationHeading).toBeInTheDocument();
        expect(informationParagraph).toBeInTheDocument();
        expect(listContent).toBeInTheDocument(); 
      });

      test('renders tab headings correctly', () => {
        render(<Description />);
        const descriptionTab = screen.getByRole('link', { name: 'Description' });
        const informationTab = screen.getByRole('link', { name: 'Information' });
        const reviewsTab = screen.getByRole('link', { name: 'Reviews (0)' });
        expect(descriptionTab).toBeInTheDocument();
        expect(informationTab).toBeInTheDocument();
        expect(reviewsTab).toBeInTheDocument();
      });

      test('renders product description correctly', () => {
        render(<Description />);
        const productDescriptionHeading = screen.getByRole('heading', { name: 'Product Description' });
        const productDescriptionParagraph = screen.getByTestId('des-para1');
        expect(productDescriptionHeading).toBeInTheDocument();
        expect(productDescriptionParagraph).toBeInTheDocument();
      });

      test('renders additional information correctly', () => {
        render(<Description />);
        const additionalInformationHeading = screen.getByRole('heading', { name: 'Additional Information' });
        const additionalInformationParagraph = screen.getByTestId('info-para');
        expect(additionalInformationHeading).toBeInTheDocument();
        expect(additionalInformationParagraph).toBeInTheDocument();
      });

      // test('renders leave review form correctly', () => {
      //   render(<Description />);
      //   const leaveReviewHeading = screen.getByRole('heading', { name: 'Leave a review' });
      //   const nameLabel = screen.getByLabelText('Your Name *');
      //   const reviewLabel = screen.getByLabelText('Your Review *');
      //   const ratingLabel = screen.getByLabelText('Your Rating *');
      //   const emailLabel = screen.getByLabelText('Your Email *');
      //   const submitButton = screen.getByRole('button', { name: 'Leave Your Review' });
      //   expect(leaveReviewHeading).toBeInTheDocument();
      //   expect(nameLabel).toBeInTheDocument();
      //   expect(reviewLabel).toBeInTheDocument();
      //   expect(ratingLabel).toBeInTheDocument();
      //   expect(emailLabel).toBeInTheDocument();
      //   expect(submitButton).toBeInTheDocument();
      // });
      
      test('renders reviews for product section correctly', () => {
        render(<Description />);
        const reviewsForProductHeading = screen.getByRole('heading', { name: 'Reviews for this Product' });
        const reviewParagraphs = screen.getAllByTestId('tab-3');
        expect(reviewsForProductHeading).toBeInTheDocument();
        expect(reviewParagraphs.length).toBeGreaterThan(0);

      });

      
       test('should add a new review and update the tab count', () => {
         render(<Description />);
         fireEvent.change(screen.getByLabelText('Your Name *'), { target: { value: 'John Doe' } });
         fireEvent.change(screen.getByLabelText('Your Rating * :'), { target: { value: parseInt('5') } });
         
         fireEvent.change(screen.getByLabelText('Your Review *'), { target: { value: 'This is a great product!' } });
         fireEvent.submit(screen.getByTestId('review-form'));
         expect(screen.getByTestId('count')).toHaveTextContent('REVIEWS (1)');
       });

      //  test('should persist reviews in local storage', () => {
      //    const review = { name: 'John Doe', rating: '5', review: 'This is a great product!' };
      //    localStorage.setItem('data', JSON.stringify([review]));
      //    render(<Description />);
      //    expect(screen.getByTestId('count')).toHaveTextContent('REVIEWS (1)');
      //  });
      
});
    