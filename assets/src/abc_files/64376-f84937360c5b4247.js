"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64376],{94239:function(e,t,r){r.d(t,{F4:function(){return s},IU:function(){return o},QV:function(){return i},Vz:function(){return n},cy:function(){return a}});let a="_aucsrf",i="_bundleId",n="_oaclientmeta",s="_lfc",o="_mfafr"},33087:function(e,t,r){var a,i,n,s,o,c,u,l,d,h,g,p,f,v,y,m,S,E,A,w,k,_,R,C,P,T,x,N,U,O,b,L,M,H,I,B,K,V,F,j,z,G,J,D,q,Q,W,Y,Z,X,$,ee,et;r.d(t,{F5:function(){return er},KU:function(){return a},N8:function(){return h},fy:function(){return d},kk:function(){return g},ss:function(){return l}}),(L=a||(a={})).Send="/send",L.SendLegacy="/send-legacy",L.Confirm="/confirm",L.Login="/login",L.Preview="/preview/:id",L.ConfirmAction="/confirm-action",L.ConfirmEmail="/confirm-email/:type",L.Error="/error",L.NewDevice="/v1/new-device-verification",L.NFTTransfer="/v1/nft-transfer",(M=i||(i={})).Config="/v2/core/magic_client/config",M.OAuthApp="/v1/api/magic_client/oauth_app",(H=n||(n={})).Persist="/v1/session/persist",H.Refresh="/v1/session/refresh",(I=s||(s={})).GetWalletInfo="/v1/core/wallet",I.SyncWallet="/v3/auth/user/wallet/sync",I.Export="/v1/auth/user/wallet/export",(B=o||(o={})).GetUserSessionTokenFromRefreshToken="/v1/auth/user/session/refresh",B.VerifySession="/v1/auth/user/session/verify",B.Logout="/v1/auth/user/logout",B.GetUserInfo="/v1/core/user",(K=c||(c={})).Factor="/v1/auth/user/factor",K.Challenge="/alpha/v1/factor/challenge",K.Verify="/alpha/v1/factor/verify",K.EmailUpdateChallenge="/v1/auth/user/email/update/challenge",K.EmailUpdateVerify="/v1/auth/user/email/update/verify",(V=u||(u={})).Start="/v2/auth/user/login/email_otp/start",V.Verify="/v1/auth/user/login/email_otp/verify",(F=l||(l={})).Start="/v2/auth/user/login/email/start",F.RedirectConfirm="/v1/auth/user/login/email/confirm",F.Status="/v1/auth/user/login/email/status",F.LoginVerify="/v2/auth/user/login/verify",F.AnomalyApprove="/v1/request_anomaly/approve",F.AnomalyBlock="/v1/request_anomaly/block",(d||(d={})).Verify="/v1/auth/user/login/oauth/verify",(h||(h={})).Verify="/v1/auth/user/login/farcaster/verify",(j=g||(g={})).UserInfo="/v1/oauth2/user/info/retrieve",j.Verify="/v2/oauth/user/verify",j.SendCredential="/v1/oauth2/credential/send",j.SendError="/v1/oauth2/error/send",(z=p||(p={})).StartTemporaryOtpEnroll="/v1/auth/user/enroll/totp/create",z.FinishTemporaryOtpEnroll="/v1/auth/user/enroll/totp/enable",z.DisableTemporaryOtp="/v1/auth/user/enroll/totp/disable",z.DisableTemporaryOtpRecoveryCode="/v1/auth/user/enroll/codes/disable",z.VerifyTemporaryOtp="/v1/auth/user/login/totp/verify",z.VerifyTemporaryOtpRecoveryCode="/v1/auth/user/login/codes/verify",(f||(f={})).Login="/v2/auth/user/redirect/login",(G=v||(v={})).Start="/v1/auth/user/login/phone/start",G.Verify="/v1/auth/user/login/phone/verify",(y||(y={})).Login="/v1/auth/user/login/jwt/verify",(m||(m={})).DeviceProfile="/v1/auth/user/device_profile",(J=S||(S={})).RestrationStart="/v1/auth/user/web_authn/registration/start",J.Register="/v1/auth/user/web_authn/register",J.RegisterDeviceStart="/v1/auth/user/web_authn/device/registration/start",J.RegisterDevice="/v1/auth/user/web_authn/device/register",J.ReauthStart="/v1/auth/user/web_authn/re_auth/start",J.ReauthVerify="/v1/auth/user/web_authn/re_auth/verify",J.Unregister="/v1/auth/user/web_authn/unregister",J.Update="/v1/auth/user/web_authn/info/update",(D=E||(E={})).Start="/v1/connect/user/login/email_otp/start",D.Sync="/v1/connect/user/wallet/sync",D.UserInfoRetrieve="/v1/connect/user/info/retrieve",(q=A||(A={})).Start="/v1/connect/user/login/jwt/start/google",q.Verify="/v1/connect/user/login/jwt/verify",(w||(w={})).Start="/v1/connect/user/login/3p_wallet/start",(Q=k||(k={})).FlowSeedWallet="/v1/auth/user/wallet/flow/seed",Q.HederaSignMessage="/v1/auth/user/wallet/hedera/message/sign",Q.KadenaCreateWallet="/v1/auth/user/wallet/kadena/create",(W=_||(_={})).MagicClientAPI="/api/magic-client",W.MagicPassportAPI="/api/passport",(Y=R||(R={})).NftTokenInfo="/v1/nft/token_info",Y.PaypalClientToken="/v1/nft/checkout/client_token",Y.CreateOrder="/v1/nft/checkout/create_order",Y.AuthorizeOrder="/v1/nft/checkout/authorize_order",Y.RequestStatus="/v1/nft/request/status",Y.PaypalOrderDetails="/v1/nft/checkout/payeremail",(Z=C||(C={})).Proxy="/v1/ethereum/provider/async/proxy",Z.GasPriceEstimation="/v1/ethereum/gas/price/estimation/retrieve",(X=P||(P={})).StripeClientToken="/v1/stripe/onramp/client_secret",X.SardineClientToken="/v1/sardine/client_token",X.PaypalGetOrder="/v1/paypal/crypto/orders",X.PaypalCreateOrder="/v1/paypal/crypto/order-entries",($=T||(T={})).Begin="/v1/core/user/action/confirm/begin",$.Status="/v1/core/user/action/confirm/status",$.Verify="/v1/core/user/action/confirm/verify_token",$.Complete="/v1/core/user/action/confirm/complete",(x||(x={})).TokenPrice="/v1/currency/convert",(ee=N||(N={})).SubmitGaslessRequest="/v1/relayer/submit-gasless-request",ee.GetNonceAddition="/v1/relayer/get-nonce-addition",ee.GetRequestState="/v1/relayer/get-request-state",(et=U||(U={})).Config="/v1/app",et.CreateEmailChallenge="/v1/auth/user_factor/email/create/challenge",et.VerifyFactor="/v1/auth/user_factor/verify",et.CreatePasskeyChallene="/v1/auth/user_factor/passkey/create/challenge",et.PasskeyChallenge="/v1/auth/user_factor/passkey/challenge",et.OauthAuthorize="/v1/authorize",et.OauthToken="/v1/token",et.UserFactor="/v1/auth/user_factor",et.PassportUser="/v1/user",(O||(O={})).PassportWallet="/v1/wallet",(b||(b={})).RevealPK="/v1/api/wallet/reveal_pk";let er={Client:a,DeviceVerification:m,EmailOtp:u,EmailLink:l,AccountRecovery:c,LegacyOAuth:g,MagicClient:i,MFA:p,Oidc:y,Redirect:f,Session:n,SMS:v,User:o,MagicApiWallet:b,Wallet:s,WebAuthn:S,Universal:E,LegacySignInWithGoogle:A,ThirdPartyWallet:w,Multichain:k,MandrakeAPI:_,Nft:R,Ethereum:C,Onramp:P,ConfirmAction:T,Farcaster:h,Token:x,Gas:N,PassportIdentity:U,PassportOps:O}},11272:function(e,t,r){r.d(t,{Y:function(){return o}});var a=r(42822),i=r(87340);let n=[i.mW,e=>(t,r,a)=>(a.setState=function(e,a){for(var i=arguments.length,n=Array(i>2?i-2:0),s=2;s<i;s++)n[s-2]=arguments[s];let{decodedQueryParams:o,magicApiKey:c}=r(),u="function"==typeof e?e(r()):e;t(u,a,...n),u.decodedQueryParams&&JSON.stringify(o)!==JSON.stringify(u.decodedQueryParams)&&t({magicApiKey:u.decodedQueryParams.apiKey||c||null,decodedQueryParams:u.decodedQueryParams})},e(a.setState,r,a))],s={decodedQueryParams:{},magicApiKey:null,isAppConfigHydrated:!1,messageEventListenerAdded:!1,userId:null,email:null,accessToken:null,eoaPublicAddress:null,existingPasskeyCredentialId:null,refreshToken:null},o=(0,a.Ue)()((0,i.tJ)(n.reduce((e,t)=>t(e),()=>s),{name:"passport-store",partialize:e=>({accessToken:e.accessToken,eoaPublicAddress:e.eoaPublicAddress,existingPasskeyCredentialId:e.existingPasskeyCredentialId,refreshToken:e.refreshToken})}))},78851:function(e,t,r){r.d(t,{O:function(){return T}});var a=r(12572),i=r(44402),n=r(46850),s=r(46286),o=r(77848),c=r(14462),u=r(74143),l=r(73660),d=r(76070);class h extends Error{constructor(e,t={}){super("[".concat(e.error_code,"] ").concat(null==e?void 0:e.message)),this.name=this.constructor.name,this.message=null==e?void 0:e.message,this.data=t,this.response=e,this.status_code=null==e?void 0:e.status_code,this.cause=e,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}var g=r(59681);class p{constructor(){var e=this;this.SERVICE_NAME="Http-Service",this.basicMagicHeaders=()=>{let e=(0,d.Z)();return{accept:"application/json, text/plain, */*","content-type":"application/json;charset=UTF-8","x-amzn-trace-id":"Root=".concat(e),"x-magic-trace-id":e,..."preview"===g.env.VERCEL_ENV?{"CF-Access-Client-Id":g.env.CLOUDFLARE_ACCESS_CLIENT_ID,"CF-Access-Client-Secret":g.env.CLOUDFLARE_ACCESS_CLIENT_SECRET}:{}}},this.serializeHeaders=e=>{let t={};if(!e)return t;for(let[r,a]of e.entries())t[r]=a;return t},this.handleMagicResponse=async function(t){let r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=l.s?console:logger;try{r=await t.json()}catch(r){throw n.error("Magic ".concat(e.SERVICE_NAME," request json() failed ").concat(t.status,": ").concat(i.route),{response:JSON.stringify(t),metadata:i,errorMessage:r.message,error:r}),r}let s={headers:e.serializeHeaders(t.headers),status_code:t.status,...r};if(!t.ok||(null==s?void 0:s.status)!=="ok")throw n.error("Magic ".concat(e.SERVICE_NAME," request failed: ").concat(i.route),{response:s,metadata:i}),new h(s);return n.info("Magic ".concat(e.SERVICE_NAME," request success: ").concat(i.route),a.aO?s.status_code:{response:s,metadata:i}),(0,c.k5)(s.data)},this.handleResponse=async function(t){let r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=l.s?console:logger;try{r=await t.json()}catch(r){throw n.error("Magic ".concat(e.SERVICE_NAME," request json() failed ").concat(t.status,": ").concat(i.route),{response:JSON.stringify(t),metadata:i,errorMessage:r.message,error:r}),r}let s={headers:e.serializeHeaders(t.headers),status_code:t.status,...r};if(!t.ok||200!==s.status_code)throw n.error("Magic ".concat(e.SERVICE_NAME," request failed: ").concat(i.route),{response:s,metadata:i}),new h(s);return n.info("Magic ".concat(e.SERVICE_NAME," request success: ").concat(i.route),a.aO?s.status_code:{response:s,metadata:i}),(0,c.k5)(r)},this.getApiKey=()=>{let e=i.o.getState().magicApiKey;if(e)return e;let{apiKey:t}=i.o.getState().decodedQueryParams;return t||""}}}class f extends p{async Get(e,t){let r=await fetch(f.BASE_URL+e,{method:"GET",headers:this.getHeaders(t)});if(!r.ok)throw Error("Failed to fetch NFT token info");let a=await r.json();return(0,c.k5)(a)}async Post(e,t,r){let a=await fetch(f.BASE_URL+e,{method:"POST",headers:this.getHeaders(t),body:JSON.stringify(r)});if(!a.ok)throw Error("Failed to fetch NFT token info");let i=await a.json();return(0,c.k5)(i)}getHeaders(e){var t,r,a;let c=i.o.getState().authUserSessionToken,l=null===(a=n.h1.getActiveRpcPayload())||void 0===a?void 0:null===(r=a.params)||void 0===r?void 0:null===(t=r[0])||void 0===t?void 0:t.jwt,d=(null==e?void 0:e.Authorization)!==void 0,{bundleId:h="BundleIDMissing",domainOrigin:g="",ethNetwork:p="mainnet",locale:f="",sdkType:v="SdkMissing",meta:y,version:m,ext:S}=i.o.getState().decodedQueryParams,E=(0,o.pp)(p,m,this.getApiKey(),(0,u.F7)(v,g),S);return{...this.basicMagicHeaders(),"accept-language":f,"x-fortmatic-network":E,"x-magic-api-key":this.getApiKey(),"x-magic-bundle-id":h,"x-magic-referrer":(0,s.a)(g),"x-magic-sdk":v,"x-magic-meta":y?btoa(JSON.stringify(y)):"None","x-magic-auth-user-id":i.o.getState().authUserId,...c&&!d&&{authorization:"Bearer ".concat(c)},...l&&{"x-custom-authorization-token":l},...e}}constructor(...e){super(...e),this.SERVICE_NAME="GAS"}}f.BASE_URL=a.Iv;class v extends p{async Get(e,t){let r=this.getHeaders(t),a=await fetch(e,{method:"GET",headers:r});return v.handleJSONResponse(a,{route:e,magicApiKey:this.getApiKey(),headers:r})}async Post(e,t,r){let a=this.getHeaders(t),i=await fetch(e,{method:"POST",headers:this.getHeaders(t),body:JSON.stringify(r)});return v.handleJSONResponse(i,{route:e,magicApiKey:this.getApiKey(),headers:a})}getHeaders(e){return{accept:"application/json, text/plain, */*","content-type":"application/json",...e}}constructor(...e){super(...e),this.SERVICE_NAME="JSON"}}v.handleJSONResponse=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{let r=await e.json();return logger.info("External API request success: ".concat(t.route),{response:e,data:r,metadata:t}),(0,c.k5)(r)}catch(r){throw logger.error("External API request parsing failed: ".concat(t.route),{response:e,metadata:t,error:r}),r}};class y extends p{async Get(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=this.getHeaders(t),i=await fetch(y.BASE_URL+e,{method:"GET",credentials:"include",headers:a,...r});return this.handleMagicResponse(i,{route:y.BASE_URL+e,magicApiKey:this.getApiKey(),headers:a})}async Post(e,t,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=this.getHeaders(t),n=await fetch(y.BASE_URL+e,{method:"POST",credentials:"include",headers:i,body:JSON.stringify(r),...a});return this.handleMagicResponse(n,{route:y.BASE_URL+e,magicApiKey:this.getApiKey(),headers:i})}async Patch(e,t,r){let a=this.getHeaders(t),i=await fetch(y.BASE_URL+e,{method:"PATCH",credentials:"include",headers:a,body:JSON.stringify(r)});return this.handleMagicResponse(i,{route:y.BASE_URL+e,magicApiKey:this.getApiKey(),headers:a})}async Delete(e,t,r){let a=this.getHeaders(t),i=await fetch(y.BASE_URL+e,{method:"DELETE",credentials:"include",headers:a,body:JSON.stringify(r)});return this.handleMagicResponse(i,{route:y.BASE_URL+e,magicApiKey:this.getApiKey(),headers:a})}getHeaders(e){var t,r,a;let c=i.o.getState().authUserSessionToken,l=null===(a=n.h1.getActiveRpcPayload())||void 0===a?void 0:null===(r=a.params)||void 0===r?void 0:null===(t=r[0])||void 0===t?void 0:t.jwt,d=(null==e?void 0:e.Authorization)!==void 0,{bundleId:h="BundleIDMissing",domainOrigin:g="",ethNetwork:p="mainnet",locale:f="",sdkType:v="SdkMissing",meta:y,version:m,ext:S}=i.o.getState().decodedQueryParams,E=(0,o.pp)(p,m,this.getApiKey(),(0,u.F7)(v,g),S);return{...this.basicMagicHeaders(),"accept-language":f,"x-fortmatic-network":E,"x-magic-api-key":this.getApiKey(),"x-magic-bundle-id":h,"x-magic-referrer":(0,s.a)(g),"x-magic-sdk":v,"x-magic-meta":y?btoa(JSON.stringify(y)):"None",...c&&!d&&{authorization:"Bearer ".concat(c)},...l&&{"x-custom-authorization-token":l},...e}}getHeadersFromParams(e){let{bundleId:t="BundleIDMissing",domainOrigin:r="",ethNetwork:a="mainnet",locale:i="",sdkType:n="SdkMissing",meta:c,version:l,ext:d,apiKey:h=""}=e;return{"accept-language":i,"x-fortmatic-network":(0,o.pp)(a,l,this.getApiKey()||h,(0,u.F7)(n,r),d),"x-magic-api-key":this.getApiKey()||h,"x-magic-bundle-id":t,"x-magic-referrer":(0,s.a)(r),"x-magic-sdk":n,"x-magic-meta":c?btoa(JSON.stringify(c)):"None"}}constructor(...e){super(...e),this.SERVICE_NAME="Mandrake-Client",this.getApiKey=()=>{let e=i.o.getState().magicApiKey;if(e)return e;let{apiKey:t}=i.o.getState().decodedQueryParams;return t||""}}}y.BASE_URL=null!==a.z0&&void 0!==a.z0?a.z0:"https://api.magic.link";class m extends p{async Get(e,t){let r=await fetch(m.BASE_URL+e,{method:"GET",headers:this.getHeaders(t)});if(!r.ok)throw Error("Something went wrong");let a=await r.json();return(0,c.k5)(a)}async Post(e,t,r){let a=await fetch(m.BASE_URL+e,{method:"POST",headers:this.getHeaders(t),body:JSON.stringify(r)});if(!a.ok)throw Error("Something went wrong");let i=await a.json();return(0,c.k5)(i)}getHeaders(e){return{accept:"application/json, text/plain, */*","content-type":"application/json;charset=UTF-8","x-magic-api-key":this.getApiKey(),...e}}}m.BASE_URL=a.Et;class S extends p{async Get(e,t){var r;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this.getHeaders(t),n=await fetch(e,{method:"GET",credentials:"include",headers:i,...a});return this.handleMagicResponse(n,{vercelCache:null==n?void 0:null===(r=n.headers)||void 0===r?void 0:r.get("X-Vercel-Cache"),route:e,headers:i})}async Post(e,t,r){var a;let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=this.getHeaders(t),s=await fetch(e,{method:"POST",credentials:"include",headers:n,body:JSON.stringify(r),...i});return this.handleMagicResponse(s,{vercelCache:null==s?void 0:null===(a=s.headers)||void 0===a?void 0:a.get("X-Vercel-Cache"),route:e,headers:n})}getHeaders(e){return{...this.basicMagicHeaders(),...e}}constructor(...e){super(...e),this.SERVICE_NAME="Mandrake-Next"}}class E extends p{async Get(e,t){let r=await fetch(E.BASE_URL+e,{method:"GET",headers:this.getHeaders(t)});if(!r.ok)throw Error("Failed to fetch NFT token info");let a=await r.json();return(0,c.k5)(a)}async Post(e,t,r){let a=await fetch(E.BASE_URL+e,{method:"POST",headers:this.getHeaders(t),body:JSON.stringify(r)});if(!a.ok)throw Error("Failed to fetch NFT token info");let i=await a.json();return(0,c.k5)(i)}getHeaders(e){var t,r,a;let c=i.o.getState().authUserSessionToken,l=null===(a=n.h1.getActiveRpcPayload())||void 0===a?void 0:null===(r=a.params)||void 0===r?void 0:null===(t=r[0])||void 0===t?void 0:t.jwt,d=(null==e?void 0:e.Authorization)!==void 0,{bundleId:h="BundleIDMissing",domainOrigin:g="",ethNetwork:p="mainnet",locale:f="",sdkType:v="SdkMissing",meta:y,version:m,ext:S}=i.o.getState().decodedQueryParams,E=(0,o.pp)(p,m,this.getApiKey(),(0,u.F7)(v,g),S);return{...this.basicMagicHeaders(),"accept-language":f,"x-fortmatic-network":E,"x-magic-api-key":this.getApiKey(),"x-magic-bundle-id":h,"x-magic-referrer":(0,s.a)(g),"x-magic-sdk":v,"x-magic-meta":y?btoa(JSON.stringify(y)):"None",...c&&!d&&{authorization:"Bearer ".concat(c)},...l&&{"x-custom-authorization-token":l},...e}}constructor(...e){super(...e),this.SERVICE_NAME="NFT"}}E.BASE_URL=a.Io;var A=r(11272);class w extends p{async Get(e,t){var r;let a=await fetch(w.BASE_URL+e,{method:"GET",headers:this.getHeaders(t)});return this.handleResponse(a,{vercelCache:null==a?void 0:null===(r=a.headers)||void 0===r?void 0:r.get("X-Vercel-Cache"),route:e,headers:this.getHeaders(t)})}async Post(e,t,r){let a=await fetch(w.BASE_URL+e,{method:"POST",headers:this.getHeaders(t),body:JSON.stringify(r)});if(!a.ok)throw Error("Something went wrong");let i=await a.json();return(0,c.k5)(i)}async Patch(e,t,r){let a=await fetch(w.BASE_URL+e,{method:"PATCH",headers:this.getHeaders(t),body:JSON.stringify(r)});if(!a.ok||204!==a.status)throw Error("Something went wrong");if(a.bodyUsed){let e=await a.json();return(0,c.k5)(e)}}getHeaders(e){let t=A.Y.getState().accessToken,r=(null==e?void 0:e.Authorization)!==void 0;return{accept:"application/json, text/plain, */*","content-type":"application/json;charset=UTF-8","x-passport-api-key":this.getApiKey(),...t&&!r&&{authorization:"Bearer ".concat(t)},...e}}getHeadersFromParams(e){let{locale:t="",apiKey:r=""}=e;return{"accept-language":t,"x-passport-api-key":this.getApiKey()||r}}constructor(...e){super(...e),this.SERVICE_NAME="Passport-Identity-Http-Service",this.getApiKey=()=>{let e=A.Y.getState().magicApiKey;if(e)return e;let{apiKey:t}=A.Y.getState().decodedQueryParams;return t||""}}}w.BASE_URL=a.mS;class k extends p{async Get(e,t){let r=await fetch(k.BASE_URL+e,{method:"GET",headers:this.getHeaders(t)});if(!r.ok)throw Error("Something went wrong");let a=await r.json();return(0,c.k5)(a)}async Post(e,t,r){let a=await fetch(k.BASE_URL+e,{method:"POST",headers:this.getHeaders(t),body:JSON.stringify(r)});if(!a.ok)throw Error("Something went wrong");let i=await a.json();return(0,c.k5)(i)}getHeaders(e){let t=A.Y.getState().accessToken,r=(null==e?void 0:e.Authorization)!==void 0;return{accept:"application/json, text/plain, */*","content-type":"application/json;charset=UTF-8",...t&&!r&&{authorization:"Bearer ".concat(t)},...e}}}k.BASE_URL=a.cA;var _=r(94239),R=r(93720),C=r(59681);class P extends p{async Get(e,t){let r=this.getHeaders(t),a=await fetch(P.BASE_URL+e,{method:"GET",credentials:"include",headers:r});return this.handleMagicResponse(a,{route:P.BASE_URL+e,magicApiKey:this.getApiKey(),headers:r})}async Post(e,t,r){let a=this.getHeaders(t),i=await fetch(P.BASE_URL+e,{method:"POST",credentials:"include",headers:a,body:JSON.stringify(r)});return this.handleMagicResponse(i,{route:P.BASE_URL+e,magicApiKey:this.getApiKey(),headers:a})}getHeaders(e){var t,r,a;let o=(0,R.getCookie)(_.cy),c=(0,R.getCookie)(_.QV),u=(0,d.Z)(),l=i.o.getState().authUserSessionToken,h=null===(a=n.h1.getActiveRpcPayload())||void 0===a?void 0:null===(r=a.params)||void 0===r?void 0:null===(t=r[0])||void 0===t?void 0:t.jwt,{bundleId:g="BundleIDMissing",domainOrigin:p="",locale:f="",sdkType:v="SdkMissing"}=i.o.getState().decodedQueryParams;return{"x-magic-trace-id":u,"x-amzn-trace-id":"Root=".concat(u),"x-magic-referrer":(0,s.a)(p),"x-magic-api-key":this.getApiKey(),"x-magic-csrf":o||"","x-magic-sdk":v,"x-magic-bundle-id":c||g,"accept-language":f,...l&&{authorization:"Bearer ".concat(l)},...h&&{authorization:"Bearer ".concat(h)},..."preview"===C.env.VERCEL_ENV?{"CF-Access-Client-Id":C.env.CLOUDFLARE_ACCESS_CLIENT_ID,"CF-Access-Client-Secret":C.env.CLOUDFLARE_ACCESS_CLIENT_SECRET}:{},...e}}constructor(...e){super(...e),this.SERVICE_NAME="RELAYER"}}P.BASE_URL=a.Ry;let T={Magic:new y,Relayer:new P,MagicApiWallet:new m,Nft:new E,JSON:new v,Gas:new f,PassportIdentity:new w,PassportOps:new k,Mandrake:new S}},73660:function(e,t,r){r.d(t,{c:function(){return i},s:function(){return a}});let a=!1,i=(()=>{try{return window.self!==window.top}catch(e){return!0}})()},46286:function(e,t,r){r.d(t,{a:function(){return n},g:function(){return s}});var a=r(73660),i=r(94390);function n(e){var t,r,a;let n=(null===(r=window.location)||void 0===r?void 0:null===(t=r.ancestorOrigins)||void 0===t?void 0:t[0])||(null===(a=document)||void 0===a?void 0:a.referrer);return(/auth.*\.magic\.link$/.test(n)||!n)&&(n=e),(0,i.K2)(n)?new URL(n).origin:"https://no-referrer.magic.link"}function s(e){a.s||(window.location.href=e)}},14462:function(e,t,r){var a,i;r.d(t,{k5:function(){return n}}),(i=a||(a={})).Snake="snake",i.Kabob="kabob";let n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"snake",r={},a="snake"===t?/(_\w)/g:/(-\w)/g;return"object"==typeof e&&e?(Object.keys(e).forEach(i=>{let s=i.replace(a,e=>e[1].toUpperCase());r[s]=e[i],Array.isArray(e[i])?r[s]=e[i].map(e=>n(e,t)):"object"!=typeof e[i]?r[s]=e[i]:r[s]=n(e[i],t)}),r):e}},94390:function(e,t,r){function a(e){return!!e&&/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function i(e){if(!e)return!1;if(e instanceof URL)return!0;try{return new URL(e),!0}catch(e){return!1}}r.d(t,{K2:function(){return i},vV:function(){return a}})}}]);