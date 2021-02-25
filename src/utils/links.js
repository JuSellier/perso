class Link {
  constructor(anchor, description, url) {
    this.anchor = anchor;
    this.description = description;
    this.url = url;
  }
}

export const links = [
  new Link("NeoCraft.app", "Algorithmic art project", "https://neocraft.app"),
  new Link("GitHub", "My GitHub profile", "https://github.com/JuSellier"),
  new Link(
    "LinkedIn",
    "My LinkedIn profile",
    "https://www.linkedin.com/in/jsellier/"
  ),
  new Link(
    "FoxiDev.io",
    "Web development services (website is not yet fully functional)",
    "https://foxidev-io.netlify.app"
  ),
  new Link(
    "Surprise?",
    "Just a surprise link, because everybody likes surprises...",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
];
