import axios from 'axios';

const { APIURL } = process.env;

const sendForm = async (body, setFeedBack) => {
  setFeedBack({
    vote: {
      yes: false,
      no: true,
    },
    voteActive: false,
    formActive: false,
    formStart: false,
    thanks: true,
    formSubmitted: true,
  });
  return new Promise((resolve, reject) => {
    axios
      .post(`${APIURL}/kb/form/feedback`, body)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

const VoteYes = (setFeedBack) => {
  setFeedBack({
    vote: {
      yes: true,
      no: false,
    },
    voteActive: true,
    formActive: false,
    formStart: false,
    thanks: false,
    formSubmitted: false,
  });
  setTimeout(() => {
    setFeedBack({
      vote: {
        yes: true,
        no: false,
      },
      voteActive: false,
      formActive: false,
      formStart: false,
      thanks: false,
      formSubmitted: false,
    });
  }, 400);
  setTimeout(() => {
    setFeedBack({
      vote: {
        yes: true,
        no: false,
      },
      voteActive: false,
      formActive: false,
      formStart: false,
      thanks: true,
      formSubmitted: false,
    });
  }, 500);
};
const VoteNo = (setFeedBack) => {
  setFeedBack({
    vote: {
      yes: false,
      no: true,
    },
    voteActive: true,
    formActive: false,
    formStart: false,
    thanks: false,
    formSubmitted: false,
  });
  setTimeout(() => {
    setFeedBack({
      vote: {
        yes: false,
        no: true,
      },
      voteActive: false,
      formActive: true,
      formStart: false,
      thanks: false,
      formSubmitted: false,
    });
  }, 400);
  setTimeout(() => {
    setFeedBack({
      vote: {
        yes: false,
        no: true,
      },
      voteActive: false,
      formActive: true,
      formStart: true,
      thanks: false,
      formSubmitted: false,
    });
  }, 500);
};

export { VoteNo, VoteYes, sendForm };
