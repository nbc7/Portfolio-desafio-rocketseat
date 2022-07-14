import { useEffect } from 'react';
import axios from 'axios';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import { MapPin } from '../components/MapPin';
import { Briefcase } from '../components/Briefcase';
import { Github } from '../components/Github';
import { LinkedIn } from '../components/LinkedIn';
import { Twitter } from '../components/Twitter';
import { Globe } from '../components/Globe';
import { Mail } from '../components/Mail';
import { LinkCardItem } from '../components/LinkCardItem';
import { Badge } from '../components/Badge';

export function Home() {
  // useEffect(() => {
  //   axios.get('https://api.github.com/users/nbc7').then((p) => {
  //     const profile = p.data;
  //     console.log(profile);
  //   });
  // }, []);

  return (
    <div>
      <div className="flex p-10 pb-0 gap-[60px]">
        <div className="min-w-fit flex flex-col gap-[30px]">
          <div>
            <Card>
              <div className="flex flex-col items-center pb-[19px] px-[46px]">
                <div className="p-[2px]">
                  <img
                    className="rounded-full border-2 border-green-500 max-h-32 max-w-32"
                    src="https://avatars.githubusercontent.com/u/22185823?v=4"
                    // src="https://avatars.githubusercontent.com/u/90021751?v=4"
                    alt="profile picture"
                  />
                </div>
                <strong className="font-bold text-[23px] leading-[29px] mt-7">João Inácio Neto</strong>
                <strong className="font-light text-[13px] leading-4 mt-[10px]">Full Stack Developer</strong>
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <div className="flex flex-col gap-5">
                <LinkCardItem icon={<MapPin />} text="Brasil" />
                <LinkCardItem icon={<Briefcase />} text="Rocketseat" />
                <LinkCardItem icon={<Github />} text="birobirobiro" />
                <LinkCardItem icon={<LinkedIn />} text="joao-inacio-neto" />
                <LinkCardItem icon={<Twitter />} text="birobirobiro" />
                <LinkCardItem icon={<Globe />} text="https://birobirobiro.dev" />
                <LinkCardItem icon={<Mail />} text="birobirobiro.dev@gmail.com" />
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <h1 className="text-xl leading-[25px] font-bold ml-[-10px]">Tecnologias</h1>
              <div className="grid grid-cols-3 gap-[15px] mt-5">
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

          <div className="flex gap-[30px] justify-center">
            <div className="w-fill">
              <Card>
                <p></p>
              </Card>
            </div>

            <div className="w-fill">
              <Card>
                <p></p>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <h1>Recent Posts</h1>
            </Card>
          </div>

          <div>
            <Card>
              <h1>Post</h1>
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
