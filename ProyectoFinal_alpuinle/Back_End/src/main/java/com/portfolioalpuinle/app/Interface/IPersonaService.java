
package com.portfolioalpuinle.app.Interface;

import com.portfolioalpuinle.app.entity.Persona;
import java.util.List;



public interface IPersonaService {

   
    public List<Persona> getPersona();
    
    public void savePersona(Persona persona);
    
    public void deletePersona (Long id);
    
    public Persona findPersona (Long id);
    
}

