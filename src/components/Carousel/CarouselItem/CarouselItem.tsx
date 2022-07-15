import React from "react";
import { cutText } from "../../../utils/utils";
import { FaPlus } from "react-icons/fa";

interface ItemItemProps {
  url: string;
  name: string;
}

const CarouselItem = (props: ItemItemProps) => {
  const { name, url } = props;
  return (
    <div className="container-item-id">
      <img
        className="carousel-image"
        style={{ width: 200, height: 264 }}
        src={url}
      />
      <p className="title">{cutText(name, 40)}</p>
      <div className="plus plusContainer">
        <FaPlus fill="#ffffff" fontSize={16} />
      </div>
    </div>
  );
};

export default CarouselItem;
