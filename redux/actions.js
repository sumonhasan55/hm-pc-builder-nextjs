export const addToBuilder = (category, component) => ({
    type: 'ADD_TO_BUILDER',
    payload: { category, component },
  });
  
  export const updateBuilderState = (categories) => ({
    type: 'UPDATE_BUILDER_STATE',
    payload: { categories },
  });