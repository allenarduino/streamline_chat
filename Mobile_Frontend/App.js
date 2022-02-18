import React from "react";
import Index from "./Index";
import AuthContext from "./contexts/AuthContextProvider";
import ProfileContext from "./contexts/ProfileContextProvider";

//For disabling the warnings
console.disableYellowBox = true;

const App = () => {
  return (
    <AuthContext>
      <ThemeContext>
        <ProfileContext>
          <Index />
        </ProfileContext>
      </ThemeContext>
    </AuthContext>
  );
};

export default App;
