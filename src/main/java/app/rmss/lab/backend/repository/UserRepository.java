package app.rmss.lab.backend.repository;

import app.rmss.lab.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

