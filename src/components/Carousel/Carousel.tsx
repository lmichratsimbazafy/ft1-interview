import { useQuery } from "@apollo/client";
import CarouselLib, {
  autoplayPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useState } from "react";
import { GET_MOVIES } from "../../graphql/movies/queries";
import Loader from "../Loader/Loader";

import { FaPlus } from "react-icons/fa";
import { cutText } from "../../utils/utils";
import CarouselItem from "./CarouselItem/CarouselItem";

interface IMovieImage {
  url: string;
  id: string;
  programs: {
    name: string;
  }[];
}

const Carousel = () => {
  const [movies, setMovies] = useState<IMovieImage[]>([]);
  const { loading, error } = useQuery(GET_MOVIES, {
    onCompleted: (res) => {
      setMovies(res.image);
    },
  });

  return (
    <div className="carousel-container">
      {error && <p>Error while fetching data ...</p>}
      {loading && <Loader {...{ loading }} />}
      {!loading && !error && (
        <CarouselLib
          {...{
            plugins: [
              "arrows",
              // "infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 6,
                },
              },
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 2000,
                },
              },
            ],
            offset: 12,
            itemWidth: 200,
            animationSpeed: 1000,
          }}
        >
          {movies.map((m) => (
            <CarouselItem
              {...{ id: m.id, name: m.programs[0].name, url: m.url, key: m.id }}
            />
          ))}
        </CarouselLib>
      )}
    </div>
  );
};

export default Carousel;
