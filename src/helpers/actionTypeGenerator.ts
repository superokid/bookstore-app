export default (actionName: string) => {
  return {
    request: `${actionName}_REQUEST`,
    success: `${actionName}_SUCCESS`,
    error: `${actionName}_ERROR`,
    progress: `${actionName}_PROGRESS`,
    default: actionName,
  };
};
