import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Briefcase, Folder, GitBranch, Github, Globe, Instagram, LinkedIn, Mail, MapPin, Star, Twitter } from '../components/Icons';
import { Card } from '../components/Card';
import { LinkCardItem } from '../components/LinkCardItem';
import { Badge } from '../components/Badge';

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

export function Home() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  // const [email, setEmail] = useState<EmailData | null>(null);

  useEffect(() => {
    handleProfile();
  }, []);

  const handleProfile = async () => {
    const config = {
      headers: { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` },
    };
    const user = await axios.get<ProfileData>('https://api.github.com/users/birobirobiro', config);
    // const user = await axios.get('https://api.github.com/user', config);
    // const emails = await axios.get('https://api.github.com/user/emails', config);
    const repos = await axios.get('https://api.github.com/users/birobirobiro/repos', config);
    // const repos = await axios.get('https://api.github.com/user/repos', config);

    // const e = emails.data.filter((e: EmailData) => {
    //   if (e.primary && e.visibility == 'public') return e.email;
    // })[0];

    setProfile(user.data);
    // setEmail(e);
    console.log(user.data);
    console.log(repos.data);
  };

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
                      <img className="rounded-full border-2 border-green-500 max-h-32 max-w-32" src={profile.avatar_url} alt="profile picture" />
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
                    {profile.twitter_username && <LinkCardItem icon={<Twitter />} text={profile.twitter_username} />}
                    {/* <LinkCardItem icon={<Instagram />} text="birobirobiro" /> */}
                    {profile.blog && <LinkCardItem icon={<Globe />} text={profile.blog} />}
                    {profile.email && <LinkCardItem icon={<Mail />} text={profile.email} />}
                  </div>
                </Card>
              </div>
            </>
          )}

          <div>
            <Card>
              <h1 className="text-xl leading-[25px] font-bold ml-[-10px]">Tecnologias</h1>
              <div className="grid grid-cols-3 justify-items-center gap-[15px] mt-5">
                <Badge text="javascript" />
                <Badge text="reactjs" />
                <Badge text="nodejs" />
                <Badge text="git" />
                <Badge text="github" />
                <Badge text="html" />
                <Badge text="css" />
                <Badge text="elixir" />
                <Badge text="react native" />
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <h1 className="text-xl leading-[25px] font-bold ml-[-10px]">Experiências</h1>
              <ul className="list-disc pl-[30px] mt-5 flex flex-col gap-[15px]">
                <li>
                  <p className="font-bold text-sm leading-[18px]">Rocketseat</p>
                  <p className="font-light text-xs leading-[15px]">2019 - Atualmente</p>
                  <p className="font-normal text-xs leading-[15px]">Community Experience</p>
                </li>

                <li>
                  <p className="font-bold text-sm leading-[18px]">Rocketseat</p>
                  <p className="font-light text-xs leading-[15px]">2019 - Atualmente</p>
                  <p className="font-normal text-xs leading-[15px]">Community Experience</p>
                </li>

                <li>
                  <p className="font-bold text-sm leading-[18px]">Rocketseat</p>
                  <p className="font-light text-xs leading-[15px]">2019 - Atualmente</p>
                  <p className="font-normal text-xs leading-[15px]">Community Experience</p>
                </li>

                <li>
                  <p className="font-bold text-sm leading-[18px]">Rocketseat</p>
                  <p className="font-light text-xs leading-[15px]">2019 - Atualmente</p>
                  <p className="font-normal text-xs leading-[15px]">Community Experience</p>
                </li>
              </ul>
            </Card>
          </div>

          <div>
            <Card>
              <h1 className="text-xl leading-[25px] font-bold ml-[-10px]">Educação</h1>
              <ul className="list-disc pl-[30px] mt-5 flex flex-col gap-[15px]">
                <li>
                  <p className="font-bold text-sm leading-[18px]">Rocketseat</p>
                  <p className="font-light text-xs leading-[15px]">2019 - 2019</p>
                  <p className="font-normal text-xs leading-[15px]">GoStack</p>
                </li>

                <li>
                  <p className="font-bold text-sm leading-[18px]">Rocketseat</p>
                  <p className="font-light text-xs leading-[15px]">2019 - 2020</p>
                  <p className="font-normal text-xs leading-[15px]">Ignite</p>
                </li>

                <li>
                  <p className="font-bold text-sm leading-[18px]">Rocketseat</p>
                  <p className="font-light text-xs leading-[15px]">2019 - 2021</p>
                  <p className="font-normal text-xs leading-[15px]">Ignite Pro</p>
                </li>

                <li>
                  <p className="font-bold text-sm leading-[18px]">Rocketseat</p>
                  <p className="font-light text-xs leading-[15px]">2019 - 2021</p>
                  <p className="font-normal text-xs leading-[15px]">Ignite Pro</p>
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
                <Link className="font-normal text-sm leading-[18px]" to="#">
                  Veja todos
                </Link>
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-[30px] justify-center">
            <div className="w-fill">
              <Card>
                <div className="flex flex-col gap-[22px]">
                  <div className="flex items-center">
                    <div>
                      <Folder />
                    </div>
                    <strong className="text-base leading-5 font-bold ml-4">my-onix</strong>
                  </div>

                  <div className="text-sm leading-5 font-normal">
                    <p>Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>
                  </div>

                  <div className="flex flex-wrap justify-between gap-4">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <div>
                          <Star />
                        </div>
                        <span className="text-[13px] leading-4 font-normal ml-2">100</span>
                      </div>

                      <div className="flex items-center">
                        <div>
                          <GitBranch />
                        </div>
                        <span className="text-[13px] leading-4 font-normal ml-2">100</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="h-[15px] w-[15px] bg-yellow-300 rounded-full border-2"></div>
                      <span className="font-normal text-sm leading-[18px] ml-2">JavaScript</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="w-fill">
              <Card>
                <div className="flex flex-col gap-[22px]">
                  <div className="flex items-center">
                    <div>
                      <Folder />
                    </div>
                    <strong className="text-base leading-5 font-bold ml-4">my-onix</strong>
                  </div>

                  <div className="text-sm leading-5 font-normal">
                    <p>Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>
                  </div>

                  <div className="flex flex-wrap justify-between gap-4">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <div>
                          <Star />
                        </div>
                        <span className="text-[13px] leading-4 font-normal ml-2">100</span>
                      </div>

                      <div className="flex items-center">
                        <div>
                          <GitBranch />
                        </div>
                        <span className="text-[13px] leading-4 font-normal ml-2">100</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="h-[15px] w-[15px] bg-yellow-300 rounded-full border-2"></div>
                      <span className="font-normal text-sm leading-[18px] ml-2">JavaScript</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <div className="flex items-center">
                <h1 className="font-bold text-xl leading-[25px]">Recent Posts</h1>
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <div className="flex flex-wrap sm:flex-nowrap pb-3 gap-5">
                <img
                  className="rounded-full max-h-32 max-w-32"
                  src="https://avatars.githubusercontent.com/u/22185823?v=4"
                  // src="https://avatars.githubusercontent.com/u/90021751?v=4"
                  alt="profile picture"
                />

                <div className="flex flex-col gap-7">
                  <div className="flex flex-col">
                    <span className="font-bold text-lg leading-[23px] min-h-[31px]">
                      {'Erro adb devices no Genymotion e Android Studio (React Native)'}
                    </span>
                    <span className="font-normal text-sm leading-[18px]">2 anos atrás</span>
                  </div>

                  <div className="flex flex-col gap-[11px]">
                    <span className="font-normal text-base leading-5">{'Erro adb devices no Genymotion e Android Studio (React Native)'}</span>

                    <div className="flex flex-wrap gap-[10px] text-sm leading-[18px] font-normal whitespace-nowrap">
                      <span>#react-native</span>
                      <span>#genimotion</span>
                      <span>#genimotion</span>
                      <span>#genimotion</span>
                      <span>#genimotion</span>
                      <span>#genimotion</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="p-5 text-center">
        <p className="text-sm leading-5">Feito com 💜 por birobirobiro</p>
      </div>
    </div>
  );
}
