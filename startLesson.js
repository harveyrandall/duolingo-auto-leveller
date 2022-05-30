/*** SETUP ***/

// Constants
const target = document.getElementById('root');
const observerOptions = {
  attributes: true,
  subtree: true
}
const attributeName = "data-lazyload-listened";

let latestMutation;

// Functions

const mutationHandler = (mutationList, observer) => {
	const mutations = [...mutationList];
	mutations.forEach( (mutation) => {
      if (mutation.type === 'attributes') {
      	if (mutation.attributeName === attributeName) {
            if (!latestMutation) {
                latestMutation = {
                    mutation: mutation,
                    ts: (new Date()).getTime()
                }
                break;
            }
          // TODO: update latestMutation, compare timestamps
          // TODO: setTimeout(() => {...}, 150), reset if new mutation occurs
          // TODO: add functions to find first incomplete lesson, open popout, click test out, start legendary.
        }
      }
      console.groupCollapsed(`Mutation: ${mutation.type}`);
      console.groupCollapsed();
        console.log(mutation);
       console.groupEnd();
      console.groupEnd();
    });
}


// Init

const observer = new MutationObserver(mutationHandler);
observer.observe(target, observerOptions);
console.info('MutationObserver started');
