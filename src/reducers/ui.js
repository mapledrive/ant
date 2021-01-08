const initialState = {
  isCollapsed: false,
};

function ui(state = initialState, action) {
  if (action.type === "TOGGLE_SIDER_MENU") {
    return { ...state, isCollapsed: !state.isCollapsed };
  } else {
    return state; // In case an action is passed in we don't understand
  }
}

export default ui;
