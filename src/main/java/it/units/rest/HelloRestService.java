package it.units.rest; // Note your package will be {{ groupId }}.rest

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/api/")
public class HelloRestService {
    @GET // This annotation indicates GET request
    @Path("/hello")
    public Response hello() {
        return Response.status(200).entity("hello from intellij").build();
    }

    @GET // This annotation indicates GET request
    @Path("/hello-andrea")
    public Response helloAndrea() {
        return Response.status(200).entity("hello andrea you code well").build();
    }
}