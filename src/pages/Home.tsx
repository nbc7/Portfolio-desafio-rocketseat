import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Bootstrap,
  Briefcase,
  Cplusplus,
  Csharp,
  Css3,
  Firebase,
  Folder,
  Git,
  GitBranch,
  Github,
  GithubLogo,
  Globe,
  Html5,
  Instagram,
  Javascript,
  LinkedIn,
  Mail,
  MapPin,
  Nextjs,
  Nodejs,
  Python,
  Reactjs,
  Star,
  Tailwind,
  Twitter,
} from '../components/Icons';
import { Card } from '../components/Card';
import { LinkCardItem } from '../components/LinkCardItem';
import { Badge } from '../components/Badge';
import { useGetGithubApiQuery } from '../graphql/generated';

interface ProfileData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name?: string;
  company?: string;
  blog: string;
  location: string;
  email: string;
  hireable?: any;
  bio: string;
  twitter_username?: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
  private_gists: number;
  total_private_repos: number;
  owned_private_repos: number;
  disk_usage: number;
  collaborators: number;
  two_factor_authentication: boolean;
  plan: { name: string; space: number; collaborators: number; private_repos: number };
}

// interface EmailData {
//   email: string;
//   primary: boolean;
//   verified: boolean;
//   visibility: string;
// }

interface Query {
  data: {
    viewer: {
      login: string;
      name: string;
      company: boolean;
      email: string;
      twitterUsername: boolean;
      location: string;
      bio: string;
      avatarUrl: string;
      websiteUrl: boolean;
      pinnedItems: {
        nodes: [
          {
            id: string;
            name: string;
            description: boolean;
            forkCount: number;
            stargazerCount: number;
            primaryLanguage: {
              name: string;
              color: string;
            };
          }
        ];
      };
    };
  };
}

export function Home() {
  // const [profile, setProfile] = useState<ProfileData | null>(null);
  const { data } = useGetGithubApiQuery();
  const profile = data?.viewer;
  console.log(data?.viewer);

  // const handleProfile = async () => {
  //   const config = {
  //     headers: { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` },
  //   };
  //   // const user = await axios.get<ProfileData>('https://api.github.com/users/birobirobiro', config);
  //   const user = await axios.get('https://api.github.com/user', config);
  //   // const repos = await axios.get('https://api.github.com/users/birobirobiro/repos', config);
  //   const repos = await axios.get('https://api.github.com/user/repos', config);

  //   // setProfile(user.data);
  //   console.log(user.data);
  //   console.log(repos.data);
  // };

  // useEffect(() => {
  //   handleProfile();
  // }, []);

  return (
    <div>
      <div className="flex flex-col lg:flex-row p-10 pb-0 gap-[60px]">
        <div className="min-w-fit flex flex-col gap-[30px]">
          {profile && (
            <>
              <div>
                <Card>
                  <div className="flex flex-col items-center pb-[19px] px-[46px]">
                    <div className="p-[2px]">
                      <img className="rounded-full border-2 border-green-500 max-h-32 max-w-32" src={profile.avatarUrl} alt="profile picture" />
                    </div>
                    <strong className="font-bold text-[23px] leading-[29px] mt-7">{profile.name}</strong>
                    <strong className="font-light text-[13px] leading-4 mt-[10px]">{profile.bio}</strong>
                  </div>
                </Card>
              </div>

              <div>
                <Card>
                  <div className="flex flex-col gap-5">
                    {profile.location && <LinkCardItem icon={<MapPin />} text={profile.location} />}
                    {profile.company && <LinkCardItem icon={<Briefcase />} text={profile.company} />}
                    {profile.login && <LinkCardItem icon={<Github />} text={profile.login} />}
                    {/* <LinkCardItem icon={<LinkedIn />} text="joao-inacio-neto" /> */}
                    {profile.twitterUsername && <LinkCardItem icon={<Twitter />} text={profile.twitterUsername} />}
                    {/* <LinkCardItem icon={<Instagram />} text="birobirobiro" /> */}
                    {profile.websiteUrl && <LinkCardItem icon={<Globe />} text={profile.websiteUrl} />}
                    {profile.email && <LinkCardItem icon={<Mail />} text={profile.email} />}
                  </div>
                </Card>
              </div>
            </>
          )}

          <div>
            <Card>
              <h1 className="text-xl leading-[25px] font-bold ml-[-10px]">Technologies</h1>
              <div className="grid grid-cols-4 justify-items-center gap-[15px] mt-5">
                <Badge icon={<Nodejs />} text="Node.JS" />
                <Badge icon={<Javascript />} text="JavaScript" />
                <Badge icon={<Html5 />} text="HTML5" />
                <Badge icon={<Css3 />} text="CSS3" />
                <Badge icon={<Reactjs />} text="ReactJS" />
                <Badge icon={<Nextjs />} text="NextJS" />
                <Badge icon={<Git />} text="Git" />
                <Badge icon={<GithubLogo />} text="Github" />
                <Badge icon={<Firebase />} text="Firebase" />
                <Badge icon={<Tailwind />} text="Tailwind" />
                <Badge icon={<Bootstrap />} text="Bootstrap" />
                <Badge icon={<Cplusplus />} text="C++" />
                <Badge icon={<Csharp />} text="C#" />
                <Badge icon={<Python />} text="Python" />
                {/* <Badge icon={<Javascript />} text="react native" /> */}
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <h1 className="text-xl leading-[25px] font-bold ml-[-10px]">Experiencies</h1>
              <ul className="list-disc pl-[30px] mt-5 flex flex-col gap-[15px]">
                <li>
                  <p className="font-bold text-sm leading-[18px]">Supergeeks</p>
                  <p className="font-light text-xs leading-[15px]">09/2019 - 01/2020</p>
                  <p className="font-normal text-xs leading-[15px]">Instrutor JR</p>
                </li>
              </ul>
            </Card>
          </div>

          <div>
            <Card>
              <h1 className="text-xl leading-[25px] font-bold ml-[-10px]">Education</h1>
              <ul className="list-disc pl-[30px] mt-5 flex flex-col gap-[15px]">
                <li>
                  <p className="font-bold text-sm leading-[18px]">Engenharia da Computação</p>
                  <p className="font-light text-xs leading-[15px]">2014 - 2018</p>
                  <p className="font-normal text-xs leading-[15px]">FIAP</p>
                </li>

                <li>
                  <p className="font-bold text-sm leading-[18px]">Técnico em Mecatrônica</p>
                  <p className="font-light text-xs leading-[15px]">2012 - 2013</p>
                  <p className="font-normal text-xs leading-[15px]">ETEC Martin Luther King</p>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="w-fill flex flex-col gap-[30px]">
          <div>
            <Card>
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl leading-[25px]">My Projects</h1>
                <Link className="font-normal text-sm leading-[18px]" to="/projects">
                  See all
                </Link>
              </div>
            </Card>
          </div>

          {/* <div className="flex flex-wrap sm:flex-nowrap gap-[30px] justify-center"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] justify-center">
            {data?.viewer.pinnedItems.nodes?.map((item) => {
              if (item?.__typename !== 'Repository') return;
              if (item.primaryLanguage?.__typename !== 'Language') return;
              if (typeof item.primaryLanguage.color !== 'string') return;

              return (
                <div className="w-fill" key={item.id}>
                  <Card>
                    <div className="flex flex-col gap-[22px]">
                      <div className="flex items-center">
                        <div>
                          <Folder />
                        </div>
                        <strong className="text-base leading-5 font-bold ml-4">{item.name}</strong>
                      </div>

                      <div className="text-sm leading-5 font-normal">
                        <p>{item.description}</p>
                      </div>

                      <div className="flex flex-wrap justify-between gap-4">
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center">
                            <div>
                              <Star />
                            </div>
                            <span className="text-[13px] leading-4 font-normal ml-2">{item.stargazerCount}</span>
                          </div>

                          <div className="flex items-center">
                            <div>
                              <GitBranch />
                            </div>
                            <span className="text-[13px] leading-4 font-normal ml-2">{item.forkCount}</span>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className={`h-[15px] w-[15px] rounded-full border-2`} style={{ backgroundColor: item.primaryLanguage.color }}></div>
                          <span className="font-normal text-sm leading-[18px] ml-2">{item.primaryLanguage.name}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-5 text-center">
        <p className="text-sm leading-5">Made by {profile?.login}</p>
      </div>
    </div>
  );
}
