// This file contains the functions that interact with the local storage to save and retrieve the upvotes and downvotes of each post.

export const upvote = (id) => {
  const votes = localStorage.getItem("votes")
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upvotes: [],
        downvotes: [],
      };

  if (votes.upvotes.indexOf(id) !== -1) {
    return false;
  }

  votes.upvotes.push(id);

  const downVotes = votes.downvotes?.filter((downvoteId) => downvoteId !== id);
  votes.downvotes = downVotes;

  localStorage.setItem("votes", JSON.stringify(votes));
  return true;
};

export const downvote = (id) => {
  const votes = localStorage.getItem("votes")
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upvotes: [],
        downvotes: [],
      };

  if (votes.downvotes.indexOf(id) !== -1) {
    return false;
  }

  votes.downvotes.push(id);

  const upVotes = votes.upvotes?.filter((downvoteId) => downvoteId !== id);
  votes.upvotes = upVotes;

  localStorage.setItem("votes", JSON.stringify(votes));
  return true;
};

// Function to check if the post is already upvoted
export const checkIsAlreadyUpVoted = (id) => {
  const votes = JSON.parse(localStorage.getItem("votes"));

  return votes?.upvotes?.find((item) => item === id);
};

// Function to check if the post is already downvoted
export const checkIsAlreadyDownVoted = (id) => {
  const votes = JSON.parse(localStorage.getItem("votes"));

  return votes?.downvotes?.find((item) => item === id);
};
