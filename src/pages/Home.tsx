import { useEffect } from 'react';
import axios from 'axios';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import { MapPin } from '../components/MapPin';
import { Briefcase } from '../components/Briefcase';
import { Github } from '../components/Github';
import { LinkedIn } from '../components/Linkedin';
import { Twitter } from '../components/Twitter';
import { Globe } from '../components/Globe';
import { Mail } from '../components/Mail';
import { LinkCardItem } from '../components/LinkCardItem';

export function Home() {
  // useEffect(() => {
  //   axios.get('https://api.github.com/users/nbc7').then((p) => {
  //     const profile = p.data;
  //     console.log(profile);
  //   });
  // }, []);

  return (
    <div className="flex p-10 gap-[60px]">
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
      </div>

      <div className="w-fill">
        <Card>
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl leading-[25px]">My Projects</p>
            <Link className="font-normal text-sm leading-[18px]" to="#">
              Veja todos
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
