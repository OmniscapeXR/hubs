import * as Realm from "realm-web";

const getRealmsApp = appId => {
  try {
    return Realm.App.getApp(appId);
  } catch {
    return new Realm.App({ id: appId });
  }
};

const realmApp = getRealmsApp("marketplace-app-ckfns");

async function loginAnonymous() {
  const credentials = Realm.Credentials.anonymous();
  try {
    const user = await realmApp.logIn(credentials);
    return user;
  } catch (err) {
    console.error("Failed to log in", err);
  }
}
loginAnonymous();

export default realmApp;
