using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.February2021.Web
{
  public class Startup
  {
    readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {

      services.AddMvc();
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "Hahn.ApplicatonProcess.February2021.Web", Version = "v1" });
      });
      services.AddCors(options =>
      {
        options.AddPolicy(MyAllowSpecificOrigins,
        builder =>
        {
          builder
                  .WithOrigins("http://localhost:43552", "https://localhost:44365")
                  .SetIsOriginAllowed(MyIsOriginAllowed)
                  .AllowCredentials()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseSwagger();
        app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Hahn.ApplicatonProcess.February2021.Web v1"));
      }

      app.UseHttpsRedirection();

      app.UseRouting();

      app.UseAuthorization();

      app.UseCors(MyAllowSpecificOrigins);

      // Serve all static files 
      app.UseDefaultFiles();
      app.UseStaticFiles();
      //app.UseMvc(routes => {
      //  routes.MapRoute(
      //      name: "default",
      //      template: "{controller=SpaIndex}/{action=Index}");

      //  //routes.MapSpaFallbackRoute(
      //  //    name: "spa-fallback",
      //  //    defaults: new { controller = "SpaIndex", action = "Index" });
      //});

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
        endpoints.MapControllerRoute(
                name: "default",
                pattern: "{controller=SpaIndex}/{action=Index}/{id?}");

      });
    }

    private static bool MyIsOriginAllowed(string origin)
    {
      var isAllowed = true;
      return isAllowed;
    }
  }
}
