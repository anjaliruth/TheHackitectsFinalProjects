import { useState, useEffect } from "react";
import { supabase } from "../../App";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import SubmitForAdoption from "./SubmitForAdoption";
import "./Login.css";

export default function Login() {
  const [userId, setUserId] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUserId(session?.user.id);
      console.log(userId);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="totalSignup">
        <div className="dummyDiv"></div>
        <h1 className="moreInfo">
          Sign up as a shelter. Once you have been verified as a partner, you
          will be able to list your organization's dogs for adoption!
        </h1>
        <div className="SupabaseLogin">
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
        </div>
        <div className="demoCredentials">
          <p>Test Email:</p>
          <p>Test Password:</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <SubmitForAdoption user={userId} />
      </div>
    );
  }
}
