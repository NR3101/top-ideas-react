import { eq } from "drizzle-orm";
import { db } from "../../../../utils";
import { Ideas } from "../../../../utils/schema";
import {
  checkIsAlreadyDownVoted,
  checkIsAlreadyUpVoted,
  downvote,
  upvote,
} from "../../../services";

const Ideaitem = ({ idea, index, refreshData }) => {
  //function to handle upvote
  const upvoteHandler = async () => {
    if (upvote(idea.id)) {
      const result = await db
        .update(Ideas)
        .set({ votes: idea.votes + 1 })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
      }
    }
  };

  //function to handle downvote
  const downvoteHandler = async () => {
    if (downvote(idea.id)) {
      const result = await db
        .update(Ideas)
        .set({ votes: idea.votes - 1 })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
      }
    }
  };

  return (
    <div className="my-5 border shadow-lg rounded-lg p-5">
      <div className="flex gap-7">
        <h2 className="flex gap-2">
          <span>{index + 1}. </span>
          {idea?.content}
        </h2>

        <div className="flex flex-col items-center">
          <h2
            onClick={upvoteHandler}
            className={`text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer px-2
            ${checkIsAlreadyUpVoted(idea.id) && "bg-green-300"}
            `}
          >
            🔥
          </h2>
          <h2 className="text-lg rounded-md font-bold p-1">{idea?.votes}</h2>
          <h2
            onClick={downvoteHandler}
            className={`text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer px-2
            ${checkIsAlreadyDownVoted(idea.id) && "bg-rose-500"}
            `}
          >
            👎
          </h2>
        </div>
      </div>

      <h2 className="mt-auto text-gray-400 text-sm flex gap-5">
        <span></span>
        By @{idea?.username} on {idea?.createdAt}
      </h2>
    </div>
  );
};

export default Ideaitem;
