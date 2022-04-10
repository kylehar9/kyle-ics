const axios = require('axios').default

const instance = axios.create({
    baseURL: 'https://www.churchofjesuschrist.org',
    timeout: 1000,
    headers: { 'cookie': 'oauth_id_token=eyJraWQiOiJlWXFrT3hRMmJ6M000cFFvQ2J1Q0dEeENWcHlVa0Jxbk4zRElUUTFjaEVNIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxeDBtZjJ3OEdIQ1RhcDM1NyIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9pZC5jaHVyY2hvZmplc3VzY2hyaXN0Lm9yZy9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6IjBvYTczazRnbTFianZsWVRpMzU3IiwiaWF0IjoxNjQ5NTQ5NjA1LCJleHAiOjE2NDk1NTMyMDUsImp0aSI6IklELi0yRkNyR19oYWhrakRhVThYZXZ6R0JMbVJGcHVaWDU5dml2Ry15MmVjYzAiLCJhbXIiOlsicHdkIl0sImlkcCI6IjAwb3ptd2NpaWZ3T3VFbjBCMzU2IiwiYXV0aF90aW1lIjoxNjQ5NTQ5NTQ0LCJhdF9oYXNoIjoiNUljVUdFSzFjU01GR1pmQ3RkdUd4USIsImZpcnN0TmFtZSI6Ikt5bGUiLCJsYXN0TmFtZSI6IkhhcmxpbmUiLCJjaHVyY2hBY2NvdW50SUQiOiIzNTMxNjEwNDQyMzQxNDI3IiwiZGlzcGxheU5hbWUiOiJLeWxlIEQuIEhhcmxpbmUiLCJwZXJzb25hbEVtYWlsIjoia3lsZWhhcjlAZ21haWwuY29tIn0.Hp0LXJkv9dkszKDc9alGUgvmzyZg2QzTeTCvzLEJQszV1hgmR3xvIheIl2vf8WQPal6f_N_ZF4ap_C1xBZcEnynSWujEIyGeE8R9Phvi07HSJvuEdH_3iNCB8qDD4hrI0XkeFsfbs5ROVxiIAiLrnoqG17cY6uVKLdsCtRm6Hmcrf7_2QTW6wYtyimFGPY5FFHNnYOeSyx8XUONgpjVbv8XMfdy_cgr_o1ghatGXc9OHe333NVWfHtAcEkqLojz-t_1dg5wdioPHsrv-d9jGrchfXGDjyEO4g71HObByeTc3xbnNYbQ6HLQNZ1vYmq2DtpV7yz6MDAbGimZe_Rm2Xg; oauth_refresh_token=2zjTAwwt7VIOtczodKtj7axqvDlovbOZff83ciLLxYk; PFpreferredHomepage=COJC; tisLocale=en; s_campaign=email-CCD_EM_MC_0222_RootsTechConnect_CTA; _cs_c=0; verificationNotice=hide; lds-youtube=true; sat_track=true; at_check=true; notice_behavior=implied|us; AMCVS_66C5485451E56AAE0A490D45@AdobeOrg=1; AMCV_66C5485451E56AAE0A490D45@AdobeOrg=-2121179033|MCIDTS|19093|MCMID|72923323129184893772885595062217521683|MCAAMLH-1650154331|9|MCAAMB-1650154331|RKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y|MCOPTOUT-1649556731s|NONE|vVersion|5.3.0|MCAID|NONE; s_cc=true; amlbcookie-prod=01; ORIG_URL=/sso?realm=/church&service=OktaOIDC&goto=https://www.churchofjesuschrist.org/services/platform/v4/set-wam-cookie&authIndexType=service&authIndexValue=OktaOIDC; NTID=qcfdI6fL0m3N07HAdv7WrCDs1ofAueuI; OAUTH_LOGOUT_URL=null; ChurchSSO=4EKtdSLYpuFkcDY0Te6Rcz5JtOU.*AAJTSQACMDIAAlNLABxLbUpPZG4rM2JONkpXMXJaWWFCRWdtaGx5Rms9AAR0eXBlAANDVFMAAlMxAAIwMQ..*; letters_access_token=QazlUb9AS4ZrKojxsj1iMhu1i5E; letters_refresh_token=_pIV0VEqkIZxGODUryCHsxCAP4A; _cs_mk_aa=0.5320818806975098_1649549609100; QSI_HistorySession=https://www.churchofjesuschrist.org/topics/families-and-individuals/lifes-challenges/hope-and-help?lang=eng~1649549905125; s_ips=914; _cs_cvars={"1":["Page Name","tools|all tools"]}; mbox=PC#7de59781aeee4820a9764923b7cb95d0.35_0#1712794821|session#e2be319aa99942cc858f122530f361d8#1649551882; _cs_id=35b44bad-5973-ad00-ec7b-24ff48a63ac1.1648069099.4.1649550021.1649549532.1586361061.1682233099533; _cs_s=16.5.0.1649551821557; gpv_Page=general-conference|2022|04|54pace.p15; gpv_cURL=abn.churchofjesuschrist.org/study/general-conference/2022/04/54pace.p15; s_tp=914; s_ppv=general-conference%7C2022%7C04%7C54pace.p15,100,100,914,1,1; adcloud={"_les_v":"y,churchofjesuschrist.org,1649551821"}; s_plt=2.66; s_pltp=general-conference|2022|04|54pace.p15; Church-auth-jwt-prod=eyJ0eXAiOiJKV1QiLCJraWQiOiIvQnA5UHlqa2QwWE9WT1RoZVlOb21URitHa3M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJLeWxlSGFyOSIsImF1ZGl0VHJhY2tpbmdJZCI6Ijk4N2Y0YmEwLTAyMmItNDliMS1hMjMzLTAyYTc3YWI0NTIwNy0xMDYyODQ3NjciLCJpc3MiOiJudWxsOi8vaWRlbnQtcHJvZC5jaHVyY2hvZmplc3VzY2hyaXN0Lm9yZzo0NDMvc3NvL29hdXRoMiIsInRva2VuTmFtZSI6ImlkX3Rva2VuIiwibm9uY2UiOiJFaWNfRVNVb1NSRWdUNGNLIiwiYXVkIjoibDE4MzgxIiwiYWNyIjoiMCIsImF6cCI6ImwxODM4MSIsImF1dGhfdGltZSI6MTY0OTU0OTU1NywiZm9yZ2Vyb2NrIjp7InNzb3Rva2VuIjoiNEVLdGRTTFlwdUZrY0RZMFRlNlJjejVKdE9VLipBQUpUU1FBQ01ESUFBbE5MQUJ4TGJVcFBaRzRyTTJKT05rcFhNWEphV1dGQ1JXZHRhR3g1Um1zOUFBUjBlWEJsQUFORFZGTUFBbE14QUFJd01RLi4qIiwic3VpZCI6IjVhYzNjMTJhLWExN2YtNDJmMC1hMDg5LTBlNTVjOTNlMzY2ZC0xMDY3MjE2MTIifSwicmVhbG0iOiIvY2h1cmNoIiwiZXhwIjoxNjQ5NTkzMjgwLCJ0b2tlblR5cGUiOiJKV1RUb2tlbiIsImlhdCI6MTY0OTU1MDA4MCwiYWdlbnRfcmVhbG0iOiIvY2h1cmNoIn0.BOz3EJknychdviXjFSUdTWZDcIlqTbUIKxlKBT7yBKAz1eIQ4XiZ0uRxGgqo5w01nDDcfU58TjoLD476BzR1n-K5jXMTBuSl0yLAesstuccHpybZKFp_0a2mFqTaY_bqaQC2dJp_-1ScsgmKZY_0mSJ5TaJ_aHxpnHsRm7sC5Q22fQjsGB1gxystpcZcc4MI7I2q0NmruNWOXMSk3IGyPFzDNcvW-uOAdYcH6fseYsghIcqztZxupan_Is1k3QozJxoDUlUhk2Lf156ccfMyTJolOP9zIUwGQfrSxowRmyIQlA1J_I4ODW1GcKGCw0hnSMWT2PaOCutDFQQ22sFUkQ; RT="z=1&dm=churchofjesuschrist.org&si=830e65aa-be7d-4fa6-959f-69267df75e96&ss=l1sj77h5&sl=q&tt=hyc&bcn=//17de4c12.akstat.io/&obo=9&ld=asjm&nu=2dxjn5p&cl=g4k2"; s_sq=ldschurchofjesuschristtemp=%26c.%26a.%26activitymap.%26page%3Dhttps%253A%252F%252Fwww.churchofjesuschrist.org%252Fnotes%253Flang%253Deng%26link%3DDelete%26region%3Dapp%26.activitymap%26.a%26.c%26pid%3Dhttps%253A%252F%252Fwww.churchofjesuschrist.org%252Fnotes%253Flang%253Deng%26oid%3Dfunctionsn%2528%2529%257B%257D%26oidt%3D2%26ot%3DBUTTON&ldschurchofjesuschristprod=%26c.%26a.%26activitymap.%26page%3Dgeneral-conference%257C2022%257C04%257C54pace.p15%26link%3D%25E2%2580%259CWhat%2520is%2520the%2520Holy%2520Ghost%2520teaching%2520me%2520this%2520week%2520as%2520I%2520read%2520these%2520chapters%253F%25E2%2580%259D%26region%3Dp8%26pageIDType%3D1%26.activitymap%26.a%26.c%26pid%3Dgeneral-conference%257C2022%257C04%257C54pace.p15%26pidt%3D1%26oid%3Dfunctionsn%2528%2529%257B%257D%26oidt%3D2%26ot%3DSPAN' }
});

async function getNotes() {
    try {
        const response = await instance.get('/notes/api/v3/annotations')
        return response
    } catch (error) {
        console.error(error);
    }
}

// Idk about the authentication for this request. Need an authorized session.
// Try: get this all to work with the data pasted in here, in a data file. data.json

function helloWorld() {
    console.log('hello world')
}

module.exports = {
    getNotes,
    helloWorld
}


