import React from "react";
import * as ReactDOM from 'react-dom/client';

const Info = (props)=> (
<>
    <h1>I Am Alive</h1>
    <p>The more you know about {props.info}</p>
</>
);

const BannerWrap = (WrappedComponent) => {
    return (props) => (
        <section>
            {props.hasBanner && (
            <header>
                IMPORTANT
            </header>
            )}
            <WrappedComponent { ...props } />
        </section>
    )

};

const RequireAuth = (WrappedComponent) => {
    return (props) => (
        <section>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            )
            :
            (
                <div>denied</div>
            )}
        </section>
    )
}


const BannerInfo = BannerWrap(Info);
const AuthInfo = RequireAuth(Info);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<BannerInfo hasBanner={true} info="peanut butter" />);
root.render(<AuthInfo isAuthenticated={false} info="peanut butter" />);