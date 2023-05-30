package com.example.FutbolLigleriBackend;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.Properties;
@SpringBootApplication
public class FutbolLigleriBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(FutbolLigleriBackendApplication.class, args);
		Properties props = System.getProperties();
		props.setProperty("com.sun.management.jmxremote.port", "8080");
		props.setProperty("com.sun.management.jmxremote.authenticate", "false");
		props.setProperty("com.sun.management.jmxremote.ssl", "false");
		props.setProperty("java.rmi.server.hostname", "localhost");
	}
	}
