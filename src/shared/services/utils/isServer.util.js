//  tell us if we're on the server
export default !(typeof window !== 'undefined' && window.document && window.document.createElement);
