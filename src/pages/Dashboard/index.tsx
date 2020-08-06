import React, { FC, useState } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';
import logoImg from '../../assets/logo.svg';

const Dahsboard: FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="logo" />

          <Profile>
            <img
              src="https://www.andersonsobelcosmetic.com/wp-content/uploads/2018/09/chin-implant-vs-fillers-best-for-improving-profile-bellevue-washington-chin-surgery.jpg"
              alt="Beatriz"
            />

            <div>
              <span>Welcome,</span>
              <strong>Beatriz Gonçales</strong>
            </div>
          </Profile>

          <button type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Appointments</h1>
          <p>
            <span>Today</span>
            <span>Day 06</span>
            <span>Monday</span>
          </p>

          <NextAppointment>
            <strong>Next appointment</strong>
            <div>
              <img
                src="https://www.andersonsobelcosmetic.com/wp-content/uploads/2018/09/chin-implant-vs-fillers-best-for-improving-profile-bellevue-washington-chin-surgery.jpg"
                alt="Beatriz"
              />

              <strong>Beatriz Gonçales</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Morning</strong>

            {[1, 2, 3].map(item => (
              <Appointment key={item}>
                <span>
                  <FiClock />
                  08:00
                </span>

                <div>
                  <img
                    src="https://www.andersonsobelcosmetic.com/wp-content/uploads/2018/09/chin-implant-vs-fillers-best-for-improving-profile-bellevue-washington-chin-surgery.jpg"
                    alt="Beatriz"
                  />

                  <strong>Beatriz Gonçales</strong>
                </div>
              </Appointment>
            ))}
          </Section>

          <Section>
            <strong>Afternoon</strong>

            {[1, 2].map(item => (
              <Appointment key={item}>
                <span>
                  <FiClock />
                  08:00
                </span>

                <div>
                  <img
                    src="https://www.andersonsobelcosmetic.com/wp-content/uploads/2018/09/chin-implant-vs-fillers-best-for-improving-profile-bellevue-washington-chin-surgery.jpg"
                    alt="Beatriz"
                  />

                  <strong>Beatriz Gonçales</strong>
                </div>
              </Appointment>
            ))}
          </Section>
        </Schedule>

        <Calendar />
      </Content>
    </Container>
  );
};

export default Dahsboard;
