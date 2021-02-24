# OnlineMarket

OnlineMarket borns as an [e-commerce](https://en.wikipedia.org/wiki/E-commerce) Website, designed to manage online products' sale and purchase.<br/>
More exactly, its a *private* e-commerce Website, with restriced access.
This means that each time an institution needs to organize an online sale and opens a new *Market* on [OnlineMarket](https://github.com/VincenzoLomba/OnlineMarket) (with its *Groups* and *Shopping Sessions*), its must also organize the distribution of the *Market*'s access credentials on his own.
The *Market* ***is not*** public; it is only accessible by a personal account that can be obtained only through the institution that manages the *Market* itself.
Administration tools are also aviable: users can be setted as administrator of specific *Market*'s *Groups* or as administrator of the whole *Market* itself, being able to see all its informations and to download Excel files resuming all products' *Orders* done by the *Users*.

### OnlineMarket Frontend

The OnlineMarket Frontend was made with the aid of the framework [Angular](https://angular.io/) and its library [Angular Material](https://material.angular.io/).<br/>
Also used the following additional modules:
- [Angular Flex Layout](https://github.com/angular/flex-layout)
- [Angular Material Design Progress Buttons](https://github.com/michaeldoye/mat-progress-buttons)
- [Angular Resize Event](https://github.com/vdolek/angular-resize-event#angular-resize-event)
- [File Saver](https://github.com/eligrey/FileSaver.js)

### OnlineMarket Backend

The OnlineMarket Backend was realized leaning on [Apache Tomcat](http://tomcat.apache.org/) and a [PostgreSql database](https://www.postgresql.org/about/).<br/>
Also used the following libraries:
- [Lombok](https://projectlombok.org) provides helpful annotations to thin code writing.
- [PostgreSql](https://jdbc.postgresql.org) allows JDBC Drivers usage to connect to a PostgreSql Database.
- [Jakson](https://github.com/FasterXML/jackson) to export Java Object into Json e vice versa, helpful in Tomcat Servlets.
- [Reflections](https://github.com/ronmamo/reflections) to search and scan for specific classes inside the Java Project ([Guava](https://github.com/google/guava/wiki/Release21) and [JavaAssist](https://github.com/jboss-javassist/javassist) are required in order for [Reflections](https://github.com/ronmamo/reflections) to work).
- [ApachePoi](https://poi.apache.org/index.html) for File Excel production; from Maven Repository [XmlBeans](https://mvnrepository.com/artifact/org.apache.xmlbeans/xmlbeans), [ApachePoi Poi](https://mvnrepository.com/artifact/org.apache.poi/poi), [ApachePoi Ooxml](https://mvnrepository.com/artifact/org.apache.poi/poi-ooxml), [ApachePoi Oxxml Schemas](https://mvnrepository.com/artifact/org.apache.poi/poi-ooxml-schemas), [Apache Commons Codec](https://mvnrepository.com/artifact/commons-codec/commons-codec), [Apache Commons Collections](https://mvnrepository.com/artifact/org.apache.commons/commons-collections4), [Apache Common Compress](https://mvnrepository.com/artifact/org.apache.commons/commons-compress).
