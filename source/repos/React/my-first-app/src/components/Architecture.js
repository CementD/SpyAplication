function Architecture() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1>Архітектура React-додатка</h1>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "30px", marginBottom: "40px" }}>
        <img
          src="https://martinfowler.com/articles/modularizing-react-apps/evolution-3.png"
          alt="React Architecture"
          style={{ maxWidth: "50%", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        />

        <div style={{ flex: 1 }}>
          <h2>Компоненти</h2>
          <p>
            React-додатки складаються з компонентів, які описують структуру кожної частини сторінки. Компоненти бувають:
          </p>
          <p>1. Функціональні — більш сучасніше</p>
          <p>2. Класові — старий підхід</p>

          <h2>Hooks</h2>
          <p>
            Хуки — це спосіб повторно використовувати логіку стану, а не сам стан. Основні хуки:
          </p>
          <p>1. useState — для збереження стану</p>
          <p>2. useEffect — для побічних ефектів</p>
          <p>3. useContext — для доступу до глобального стану</p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "40px" }}>
        <div style={{ flex: 1 }}>
          <h2>Переваги</h2>
          <p>1. Віртуальний DOM</p>
          <p>2. Компонентний підхід</p>
          <p>3. Активне спільнота</p>
          <p>4. Підтримка від Facebook</p>
          <p>5. Гнучкість та сумісність</p>
        </div>

        <div style={{ flex: 1 }}>
          <h2>Недоліки</h2>
          <p>1. JSX і Flux/Redux складні для новачків</p>
          <p>2. Відсутність єдиної структури проєкту</p>
          <p>3. Складність керування станом</p>
          <p>4. Проблеми при оновленнях</p>
        </div>
      </div>
    </div>
  );
}

export default Architecture

