import React, {ReactElement} from "react";
import {
  Button,
  IconButton,
  Link,
  Tooltip,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import {RiLinkedinBoxFill, RiGithubFill, RiMediumFill} from "react-icons/ri";
import Image from "next/image";
import ModalContact from "./modal-contact";
import {chooseTranslate} from "../utils/translate";

const Topbar = ({changeLanguage, locale}): ReactElement => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const t = chooseTranslate(locale);

  return (
    <header className="header">
      <div className="avatar">
        <Image
          src="/me-2.png"
          width={100}
          height={100}
          alt="Profile image"
          title="Profile image"
          loading="lazy"
        />
        {/* <Select
          className="select-language"
          variant="filled"
          size="sm"
          defaultValue={locale}
          onChange={changeLanguage}
        >
          <option value="en-US">🇺🇸</option>
          <option value="pt-BR">🇧🇷</option>
        </Select> */}
      </div>
      <div className="header-actions">
        <Button
          className="header-actions__get-in-touch"
          colorScheme="whatsapp"
          size="sm"
          mr="2"
          onClick={onOpen}
        >
          {t.getInTouch}
        </Button>
        <Tooltip hasArrow label="" placement="auto">
          <Link href="https://www.linkedin.com/in/victorhvs/" isExternal>
            <IconButton
              variant="ghost"
              size="md"
              aria-label="Linkedin"
              icon={<RiLinkedinBoxFill />}
            />
          </Link>
        </Tooltip>
        <Tooltip hasArrow label="" placement="auto">
          <Link href="https://medium.com/@victorhvs" isExternal>
            <IconButton
              variant="ghost"
              size="md"
              aria-label="Medium"
              icon={<RiMediumFill />}
            />
          </Link>
        </Tooltip>
        <Tooltip hasArrow label="" placement="auto">
          <Link href="https://github.com/VictorHVS" isExternal>
            <IconButton
              variant="ghost"
              size="md"
              aria-label="Github"
              icon={<RiGithubFill />}
            />
          </Link>
        </Tooltip>
      </div>
      <ModalContact isOpen={isOpen} onClose={onClose} locale={locale} />
    </header>
  );
};

export default Topbar;
