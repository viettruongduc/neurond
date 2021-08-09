import ReactDOM from 'react-dom';
const loadableReady = require('@loadable/component').loadableReady;

// You can delete this file if you're not using it
// export const onServiceWorkerUpdateReady = () => {
//   const answer = window.confirm(
//     `This application has been updated. ` +
//       `Reload to display the latest version?`
//   )

//   if (answer === true) {
//     window.location.reload()
//   }
// }

export const registerServiceWorker = () => true

export const replaceHydrateFunction = () => {
  return (element, container, callback) => {
    loadableReady(() => {
      ReactDOM.render(element, container, callback);
    });
  };
};
