const portfolio = import.meta.env.VITE_SOCIAL_PORTFOLIO;
const project_informaton = import.meta.env.VITE_SOCIAL_PROJECT_INFORMATION;
const github = import.meta.env.VITE_SOCIAL_GITHUB;

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto mt-60 flex items-center justify-between gap-3 px-5 pb-10">
        <p className="text-center text-xs">
          {`© 2021 PinasMura. All Rights Reserved. Terms of Service Privacy
          Policy`}
        </p>
        <div className="flex gap-4">
          <a target="_blank" href={portfolio}>
            Portfolio
          </a>
          <a target="_blank" href={project_informaton}>
            Project Information
          </a>
          <a target="_blank" href={github}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
