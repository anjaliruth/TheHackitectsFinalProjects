import { useState, useEffect } from "react";
import { supabase } from "../../App";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import SubmitForAdoption from "./SubmitForAdoption";
import "./Login.css";

export default function Login() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="totalSignup">
        <div className="dummyDiv"></div>
     <h1 className="moreInfo">Sign up as a shelter. Once you have been verified as a partner, you will be able to list your organization's dogs for adoption!</h1>
        <div className="SupabaseLogin">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
        </div>
        <div className="demoCredentials">
          <p>Test Email: test@test.com</p>
          <p>Test Password: 12345</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <SubmitForAdoption />
      </div>
    );
  }
}
