import { render, screen } from '@testing-library/react';
import App from './App';

test('bypass test', () => {
  render(<App />);
  const bypass = screen.getByText("desktop");
  expect(bypass).toBeInTheDocument();
});

// test('slide-show exist?', () => {
//   render(<App />);
//   const check_slide_show = screen.getByTestId("slide-show");
//   expect(check_slide_show).toBeInTheDocument();
// });

// test('slide-show-controller exist?', () => {
//   render(<App />);
//   const check_slide_show_controller = screen.getByTestId("slide-show-controller");
//   expect(check_slide_show_controller).toBeInTheDocument();
// });

// test('nav-list exist?', () => {
//   render(<App />);
//   const check_nav_list = screen.getByTestId("nav-list");
//   expect(check_nav_list).toBeInTheDocument();
// });