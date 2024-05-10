import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContextProvider";

const Hero = () => {
  const { theme, setTheme } = useContext(ThemeContext);



  return (
    <div className="my-10 flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold text-center">
        Top 20 Productive Ideas for your next Project
      </h2>
      <h2 className="text-center my-3">
        <span className="text-secondary font-bold underline">
          &quot;Like your favorite ideas.&quot;
        </span>{" "}
        Share your own ideas with the community,No sign up required!!
      </h2>

      <div>
        <select
          defaultValue="Select your favorite theme"
          onChange={(e) => setTheme(e.target.value)}
          className="select select-bordered border-primary w-full max-w-xs"
        >
          <option disabled>Select your favorite theme</option>
          <option>light</option>
          <option>dark</option>
          <option>cupcake</option>
          <option>aqua</option>
          <option>synthwave</option>
          <option>sunset</option>
          <option>night</option>
          <option>winter</option>
          <option>acid</option>
          <option>forest</option>
        </select>
      </div>
    </div>
  );
};

export default Hero;
