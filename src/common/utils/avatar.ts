export default function createAvatar() {
  return `https://avatars.dicebear.com/api/avataaars/${
    Math.random() * 100000
  }.svg`;
}
