export function OAuthLogin() {
  const url = '/login';
  const name = '_blank';
  const specs = 'width=500,height=500';
  window.open(url, name, specs);
}