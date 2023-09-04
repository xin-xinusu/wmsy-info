import { Pages } from '../../utils';

// Replace dashes with space - used for destructuring a url param
export const replaceDashWithSpace = (string) => string.replace(/-/g, " ")
// Replace spaces with dashes - used for building a url link for param
export const replaceSpaceWithDash = (string) => string.replace(/ /g, "-");
// Replace all the additional characters that user may have included ie: ? 
export const stripCharactersAndDash = (string) => string.replace(/[^a-zA-Z0-9- ]/g, "")


// link to route specific to category 
export const linkToLearnPage = (router, linkRoute) => router.push( `${Pages.LEARN}/${linkRoute ? linkRoute : ''}`)

