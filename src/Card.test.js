import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";


it("should render without crashing", () => {
  const photos = TEST_IMAGES;
  render(<Card 
    caption={photos.caption}
    src={photos.src}
    currNum={0}
    totalNum={3}
  />)
})

it("should match snapshot", () => {
  const photos = TEST_IMAGES;  
  const {asFragment} = render(<Card 
    caption={photos.caption}
    src={photos.src}
    currNum={0}
    totalNum={3}
  />)
  expect(asFragment()).toMatchSnapshot();
})