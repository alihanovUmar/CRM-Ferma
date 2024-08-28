import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import images
import LanguageIconRu from "../assets/images/languageru.webp";
import LanguageIconKg from "../assets/images/languagekg.jpeg";
import LanguageIconUz from "../assets/images/languageuz.webp";
import Avatar from "../assets/images/avatar.svg";
// import react-icons
import { IoIosArrowDown } from "react-icons/io";
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import translationsRu from "../../public/locale/translationsru";
import translationsUz from "../../public/locale/translationsuz";
import translationsKg from "../../public/locale/translationsKg";

// Определяем сохраненный язык или используем по умолчанию
const savedLanguage = localStorage.getItem("selectedLanguage") || "ru";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: translationsRu },
      uz: { translation: translationsUz },
      kg: { translation: translationsKg },
    },
    lng: savedLanguage,
    fallbackLng: "ru",
  });

export default function Header({ title }) {
  const languageOptions = [
    { code: "ru", icon: LanguageIconRu, name: "Ру", value: "ru" },
    { code: "kg", icon: LanguageIconKg, name: "Кы", value: "kg" },
    { code: "uz", icon: LanguageIconUz, name: "Уз", value: "uz" },
  ];

  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageOptions.find(lang => lang.value === savedLanguage) || languageOptions[0]
  );

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setLanguageDropdownOpen(false);
    i18n.changeLanguage(language.value);
    localStorage.setItem("selectedLanguage", language.value);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
      const language = languageOptions.find(lang => lang.value === savedLanguage);
      if (language) setSelectedLanguage(language);
    }
  }, []);

  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <div className="modal_header_wrapper">
          <h1 className="modal_header_title">{title}</h1>
          <div className="modal_header_language_profil">
            <div className="modal_header_language" onClick={toggleLanguageDropdown}>
              <div className="modal_header_language_name">
                <img
                  className="modal_language_icon"
                  src={selectedLanguage.icon}
                  alt="Language"
                />
                <p className="modal_language_name">{selectedLanguage.name}</p>
              </div>
              <IoIosArrowDown
                className={`modal_header_language_arrow ${
                  isLanguageDropdownOpen ? "open" : ""
                }`}
              />
              {isLanguageDropdownOpen && (
                <div className="modal_language_dropdown">
                  {languageOptions
                    .filter((language) => language.code !== selectedLanguage.code)
                    .map((language) => (
                      <div
                        key={language.code}
                        className="modal_language_option"
                        onClick={() => handleLanguageChange(language)}
                      >
                        <img
                          className="modal_language_icon"
                          src={language.icon}
                          alt={language.name}
                        />
                        <p className="modal_language_name">{language.name}</p>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="modal_header_profil" onClick={toggleProfileDropdown}>
              <div className="modal_header_profil_avatar_name">
                <img
                  className="modal_header_profil_avatar"
                  src={Avatar}
                  alt="Avatar"
                />
                <div className="modal_header_profil_name">
                  <h2 className="modal_profil_name">Janibek Maxatov</h2>
                  <p className="modal_profil_jobtitle">{t("admin")}</p>
                </div>
              </div>
              <IoIosArrowDown
                className={`modal_header_profil_arrow ${
                  isProfileDropdownOpen ? "open" : ""
                }`}
              />
              {isProfileDropdownOpen && (
                <ul className="modal_profile_dropdown">
                  <li className="modal_profile_option">{t("profile")}</li>
                  <li className="modal_profile_option">{t("settings")}</li>
                  <li className="modal_profile_option">{t("logout")}</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
  