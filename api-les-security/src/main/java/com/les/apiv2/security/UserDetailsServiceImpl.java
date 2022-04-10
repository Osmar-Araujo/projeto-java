package com.les.apiv2.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.les.apiv2.entities.Usuario;
import com.les.apiv2.repository.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private UsuarioRepository userRep;

	@Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {		
		Usuario user = userRep.findByEmail(username);
		
        if(user == null) {
        	throw new UsernameNotFoundException("Usuário não encontrado");	
        }
        return user;
    }
}
