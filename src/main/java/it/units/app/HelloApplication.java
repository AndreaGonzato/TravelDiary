package it.units.app;

// import the rest service you created!
import it.units.rest.HelloRestService; import it.units.rest.HelloRestService; import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;public class HelloApplication extends Application {
    private Set<Object> singletons = new HashSet<Object>();
    public HelloApplication() {
        // Register our hello service
        singletons.add(new HelloRestService());
    }    @Override
    public Set<Object> getSingletons() {
        return singletons;
    }
}