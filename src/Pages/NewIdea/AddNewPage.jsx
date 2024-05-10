import { ChevronLeft, Info, Send } from "lucide-react";
import Header from "../Home/components/Header";
import { useEffect, useState } from "react";
import { db } from "../../../utils";
import { Ideas } from "../../../utils/schema";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const AddNewPage = () => {
  const [idea, setIdea] = useState("");
  const [username, setUsername] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [existingUser, setExistingUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (username) {
      setExistingUser(true);
      setUsername(username);
    }
  }, []);

  const onSubmitHandler = async () => {
    const result = await db
      .insert(Ideas)
      .values({
        content: idea,
        username: username,
        createdAt: moment().format("DD MMM yyyy"), // 23 Jan 2023
      })
      .returning({ id: Ideas.id });

    if (result) {
      localStorage.setItem("username", username);
      setIdea("");
      setUsername("");
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <div>
      <Header />

      {/* Alert */}
      {showAlert && (
        <div role="alert" className="alert alert-success mt-5 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your idea has been submitted successfully!</span>
        </div>
      )}

      {/* Go Back Button */}
      <button onClick={() => navigate("/")} className="btn btn-secondary mt-7">
        <ChevronLeft />
        Go Back
      </button>

      <h2 className="font-bold text-xl md:text-3xl mt-5 text-center">
        From Concept to Creation : Empowering the Next Generation of Innovators
      </h2>

      {/* Idea TextArea */}
      <div className="flex flex-col mt-7 gap-2">
        <label>Your Idea *</label>
        <textarea
          className="textarea textarea-bordered border-primary"
          placeholder="What's your idea?"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />
      </div>

      {/* Username Input */}
      {!existingUser && (
        <div className="flex flex-col mt-7 gap-2">
          <label className="flex justify-between">
            Your Username *
            <span className="flex items-center gap-2 text-xs text-secondary">
              <Info className="w-4 h-4" /> No Account Needed
            </span>
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full border-primary"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      )}

      {/* Submit Btn */}
      <button
        onClick={onSubmitHandler}
        disabled={!idea}
        className="w-full btn btn-primary mt-7 text-base flex justify-center"
      >
        Submit
        <Send className="w-[15px] h-[15px] self-center" />
      </button>
    </div>
  );
};

export default AddNewPage;
