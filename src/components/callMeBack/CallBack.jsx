import React from 'react';
import styles from './CallBack.module.scss';


function CallBack(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textDescription}>
        Вы можете оставить
        <span className={styles.colorAccent}>нам</span>
        заявку на запись
      </div>
      <div className={styles.container}>
        <form className={styles.formSize} onSubmit={(e) => this.formSubmit(e)}>
          <div className={styles.sendData}>
            <input type="texttexttext"
              // onChange={this.currentName}
                   placeholder={'Имя'}
            />
            <input type="texttexttext"
              // onChange={this.currentEmail}
                   placeholder={'+375(__) ___ __ __'}
            />
          </div>
          <div className={styles.messages}>
                            <textarea name="" id="" cols="10" rows="2"
                              placeholder={'Модель авто'}
                              // onChange={this.currentSubject}
                            />
            <textarea name="" id="" cols="10" rows="7"
              placeholder={'Услуга или Ваши особые пожелания'}
              // onChange={this.currentMessage}
            />
          </div>
          <div className={styles.button} onClick={(e) => this.formSubmit(e)}>
            <button className={`${styles.buttonSubmit} ${styles.btn}`}><span>Отправить</span></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CallBack;