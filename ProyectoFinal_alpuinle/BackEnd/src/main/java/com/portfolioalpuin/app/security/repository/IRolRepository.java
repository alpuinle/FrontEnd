
package com.portfolioalpuin.app.security.repository;

import com.portfolioalpuin.app.security.entity.Rol;
import com.portfolioalpuin.app.security.enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
