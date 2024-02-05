import Header from "../../components/header/header";
import styles from "./user.module.scss";
import { useParams } from "react-router-dom";
import { useLazyGetSingleUserQuery } from "../../services/appApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSingleUser } from "../../store/actions/creators/users";
import {
  StyledSmallTitle,
  StyledText,
} from "../../components/typography/typography";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";

function User() {
  const params = useParams();
  const dispatch = useDispatch();
  const [fetchSingleUser, { data, isLoading, isError }] =
    useLazyGetSingleUserQuery();
  const user = useSelector((store: any) => store.users.singleUser);

  useEffect(() => {
    fetchSingleUser(Number(params.id));
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setSingleUser(data?.data));
    }
  }, [data]);

  return (
    <div className={styles.user}>
      <Header location="user" isError={isError} isLoading={isLoading} />
      <div
        className={`${styles.content} ${
          isLoading || isError ? styles.content_center : ""
        }`}
      >
        {!isLoading && !isError ? (
          <>
            <div className={styles.content__left}>
              <StyledText color="#000">
                Клиенты видят в нем эксперта по вопросам разработки комплексных
                решений финансовых продуктов, включая такие аспекты, как
                организационная структура, процессы, аналитика и ИТ-компоненты.
                Он помогает клиентам лучше понимать структуру рисков их бизнеса,
                улучшать процессы за счет применения новейших технологий и
                увеличивать продажи, используя самые современные аналитические
                инструменты.
              </StyledText>
              <StyledText color="#000">
                В работе с клиентами недостаточно просто решить конкретную
                проблему или помочь справиться с трудностями. Не менее важно
                уделять внимание обмену знаниями: "Один из самых позитивных
                моментов — это осознание того, что ты помог клиенту перейти на
                совершенно новый уровень компетентности, уверенность в том, что
                после окончания проекта у клиента есть все необходимое, чтобы
                дальше развиваться самостоятельно".
              </StyledText>
              <StyledText color="#000">
                Помимо разнообразных проектов для клиентов финансового сектора,
                {" " + user?.first_name} ведет активную предпринимательскую
                деятельность. Он является совладельцем сети клиник эстетической
                медицины в Швейцарии, предлагающей инновационный подход к
                красоте, а также инвестором других бизнес-проектов.
              </StyledText>
            </div>
            <div className={styles.content__right}>
              <div className={styles.contact}>
                <img
                  src="/tel.svg"
                  alt="tel"
                  className={styles.contact__image}
                />
                <Link to={`tel:+79543334455`} className={styles.link}>
                  <StyledText color="#000">+7 (954) 333-44-55</StyledText>
                </Link>
              </div>
              <div className={styles.contact}>
                <img
                  src="/mail.svg"
                  alt="mail"
                  className={styles.contact__image}
                />
                <Link to={`mailto:${user?.email}`} className={styles.link}>
                  <StyledText color="#000">{user?.email}</StyledText>
                </Link>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {isLoading ? <Spinner /> : ""}
        {isError ? (
          <StyledSmallTitle color="#000">
            Пользователь не найден
          </StyledSmallTitle>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default User;
