import { avatarColors } from "@/types";

export const getRandomAvatarColor = (): avatarColors => {
  const colors = ['red', 'blue', 'orange', 'gray', 'fuchsia'];
  return colors[Math.floor(Math.random() * colors.length)] as avatarColors;
}
