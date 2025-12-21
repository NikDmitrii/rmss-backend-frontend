package app.rmss.lab.backend;

import app.rmss.lab.backend.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class BackendApplicationTests {

    @Autowired
    private UserService userService;

    @Test
    void contextLoads() {
        // Проверяем, что Spring-контекст поднялся
        // и бин UserService успешно внедрён
        assertThat(userService).isNotNull();
    }

}
